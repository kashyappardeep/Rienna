<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Rank;
use App\Models\LevelIncome;
use App\Models\UserEarning;
use App\Models\PackageHistory;
use App\Models\TransactionHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthenticated'
            ], 401);
        }

        $email = $request->query('email');

        $disk = Storage::disk('local');
        $path = 'orders.json';
        $orders = [];

        if ($disk->exists($path)) {
            $decoded = json_decode($disk->get($path), true);
            if (is_array($decoded)) {
                $orders = $decoded;
            }
        }

        // Filter by email if provided
        if ($email) {
            $orders = array_filter($orders, function ($order) use ($email) {
                $orderEmail = $order['billing_details']['email'] ?? null;
                return $orderEmail && strtolower($orderEmail) === strtolower($email);
            });
            $orders = array_values($orders); // Re-index array
        }

        return response()->json([
            'status' => true,
            'orders' => $orders,
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthenticated'
            ], 401);
        }

        $validated = $request->validate([
            'billingDetails.fullName' => 'required|string|max:120',
            'billingDetails.mobile' => 'required|string|max:30',
            'billingDetails.pincode' => 'required|string|max:20',
            'billingDetails.address' => 'required|string|max:500',
            'billingDetails.email' => 'nullable|email|max:150',
            'paymentMode' => 'required|string|in:INR,USDT,ANB,EARNINGS',
            'totals.subtotal' => 'required|numeric|min:0',
            'totals.total' => 'required|numeric|min:0',
            'totals.currency' => 'required|string|max:10',
            'items' => 'required|array|min:1',
            'items.*.name' => 'required|string|max:200',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric|min:0',
            'orderRef' => 'required|string|max:50',
            'paymentReference' => 'nullable|string|max:200',
        ]);

        DB::beginTransaction();
        try {

        $existing = [];
        $disk = Storage::disk('local');
        $path = 'orders.json';
        if ($disk->exists($path)) {
            $decoded = json_decode($disk->get($path), true);
            if (is_array($decoded)) {
                $existing = $decoded;
            }
        }

        $record = [
            'id' => $validated['orderRef'],
            'payment_mode' => $validated['paymentMode'],
            'payment_reference' => $validated['paymentReference'] ?? null,
            'billing_details' => $validated['billingDetails'],
            'totals' => $validated['totals'],
            'items' => $validated['items'],
            'created_at' => now()->toISOString(),
        ];

        array_unshift($existing, $record);
        $disk->put($path, json_encode($existing, JSON_PRETTY_PRINT));

        // ✅ UPDATE USER EARNINGS (like buyPackage)
        $totalAmount = $validated['totals']['total'];
        $remaining3x = $totalAmount * 3;

        $earning = UserEarning::firstOrCreate([
            'user_id' => $user->id
        ]);

        $earning->total_invest += $totalAmount;
        $earning->remaining_income += $remaining3x;
        $earning->save();

        // ✅ ACTIVATE USER IF INACTIVE
        if ($user->status == 0) {
            $user->status = 1;
            $user->save();
        }

        // ✅ CREATE PACKAGE HISTORY RECORD
        PackageHistory::create([
            'user_id'    => $user->id,
            'package_id' => null, // null = Product Purchase (not a package)
            'amount'     => $totalAmount,
            'type'       => $this->getPaymentType($validated['paymentMode']),
            'tx_hash'    => $validated['paymentReference'] ?? null,
        ]);

        // ==================================================
        // ✅ LEVEL INCOME DISTRIBUTION (15 Levels)
        // ==================================================

        $uplineId = $user->sponsor_id;

        for ($i = 1; $i <= 15; $i++) {

            if (!$uplineId) {
                break;
            }

            $upline = User::find($uplineId);

            if (!$upline) {
                break;
            }

            // ==========================================
            // ✅ TEAM BUSINESS UPDATE
            // ==========================================
            $upEarning = UserEarning::firstOrCreate([
                'user_id' => $upline->id
            ]);
            $upEarning->team_business += $totalAmount;
            $upEarning->save();

            // ==========================================
            // ✅ RANK CHECK
            // ==========================================
            $this->checkRank($upline);
            $upline->save();

            // ==========================================
            // ✅ ONLY ACTIVE USER GETS INCOME
            // ==========================================
            if ($upline->status != 0) {

                $level = LevelIncome::where('level', $i)->first();

                if ($level) {

                    // LEVEL INCOME CALCULATION
                    $income = ($totalAmount * $level->percentage) / 100;

                    // GET/CREATE USER EARNING
                    $upEarning = UserEarning::firstOrCreate([
                        'user_id' => $upline->id
                    ]);

                    // CHECK REMAINING INCOME
                    if ($upEarning->remaining_income <= 0) {
                        $uplineId = $upline->sponsor_id;
                        continue;
                    }

                    // IF INCOME > REMAINING
                    if ($income > $upEarning->remaining_income) {
                        $income = $upEarning->remaining_income;
                    }

                    // 80% USER, 20% RIENNA
                    $incomeearned = ($income * 80) / 100;
                    $riennaearn = ($income * 20) / 100;

                    // UPDATE EARNING
                    $upEarning->total_earning += $incomeearned;
                    $upEarning->level_income += $incomeearned;
                    $upEarning->rienna_wallet += $riennaearn;
                    $upEarning->available_withdrawal += $incomeearned;
                    $upEarning->remaining_income -= $income;

                    // avoid negative
                    if ($upEarning->remaining_income < 0) {
                        $upEarning->remaining_income = 0;
                    }

                    $upEarning->save();

                    // TRANSACTION HISTORY
                    TransactionHistory::create([
                        'user_id' => $upline->id,
                        'from_id' => $user->id,
                        'to_id'   => $upline->id,
                        'level'   => $i,
                        'amount'  => $income,
                        'type'    => 1,
                        'status'  => 1,
                        'remark'  => 'Level Income (Product)',
                    ]);
                }
            }

            // NEXT UPLINE
            $uplineId = $upline->sponsor_id;
        }

        DB::commit();

        return response()->json([
            'status' => true,
            'message' => 'Order stored successfully',
            'order' => $record,
        ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    private function getPaymentType($mode)
    {
        return match($mode) {
            'INR' => 1,
            'USDT' => 2,
            'ANB' => 3,
            'EARNINGS' => 4,
            default => 1,
        };
    }

    // ======================================================
    // ✅ RANK CHECK FUNCTION (copied from PackageController)
    // ======================================================
    public function checkRank($user)
    {
        $earning = UserEarning::firstOrCreate([
            'user_id' => $user->id
        ]);

        $totalBusiness = $earning->team_business ?? 0;
        $ranks = Rank::orderBy('id', 'asc')->get();
        $totalRequired = 0;

        foreach ($ranks as $rank) {
            $totalRequired += $rank->total_business;

            if ($totalBusiness >= $totalRequired) {
                
                // STATUS UPDATE
                if ($rank->id >= 3 && $rank->id < 5) {
                    $user->status = 3; // Platinum & Diamond
                }
                if ($rank->id >= 5 && $rank->id < 7) {
                    $user->status = 4; // Ruby & Sapphire
                }
                if ($rank->id >= 7) {
                    $user->status = 5; // Emerald+
                }

                // CHECK DUPLICATE HISTORY
                $exists = TransactionHistory::where([
                    'user_id' => $user->id,
                    'rank_id' => $rank->id,
                    'type' => 2,
                    'status' => 0,
                ])->exists();

                // CREATE HISTORY
                if (!$exists) {
                    TransactionHistory::create([
                        'user_id' => $user->id,
                        'rank_id' => $rank->id,
                        'amount' => 0,
                        'type' => 2, // 2 = Rank Reward
                        'status' => 0, // 0 = Pending
                        'remark' => $rank->name . ' Rank Reward Pending',
                    ]);
                }
            }
        }

        $user->save();
    }
}
