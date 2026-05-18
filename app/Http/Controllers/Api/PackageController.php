<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Models\Rank;
use App\Models\User;
use App\Models\Package;
use App\Models\LevelIncome;
use App\Models\UserEarning;
use Illuminate\Http\Request;
use App\Models\PackageHistory;
use App\Models\TransactionHistory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Royalty;
use App\Models\Admin;
use App\Models\UserAddress;

class PackageController extends Controller
{

    public function index()
    {
        // ======================
        // 📦 PACKAGES
        // ======================
        $packages = Package::orderBy('id', 'asc')->get();

        // ======================
        // 📊 LEVEL INCOME
        // ======================
        $levels = LevelIncome::orderBy('level', 'asc')->get();

        // ======================
        // 🏆 RANKS
        // ======================
        $ranks = Rank::orderBy('id', 'asc')->get();

        // ======================
        // 💰 ROYALTY (single row)
        // ======================
        $royalty = Royalty::first();

        return response()->json([

            'status' => true,

            'message' => 'All data fetched successfully',

            'data' => [

                // 📦 Packages
                'packages' => $packages,

                // 📊 Level income
                'level_income' => $levels,

                // 🏆 Ranks
                'ranks' => $ranks,

                // 💰 Royalty
                'royalty' => $royalty,
            ]
        ]);
    }

    public function buyPackage(Request $request)
    {   
         DB::beginTransaction();
        try {

            $request->validate([
                'package_id' => 'required',
                'type'       => 'required', // 1=INR 2=USDT 3=ANB
                'tx_hash'    => 'nullable',
                'pincode'    => 'required',
                'address'    => 'required',
            ]);

            // ==================================================
            // ✅ LOGIN USER
            // ==================================================

            $user = Auth::user();

            if (!$user) {

                return response()->json([
                    'status' => false,
                    'message' => 'Unauthenticated User'
                ], 401);
            }

            // ==================================================
            // ✅ PACKAGE FIND
            // ==================================================

            $package = Package::find($request->package_id);

            if (!$package) {

                return response()->json([
                    'status' => false,
                    'message' => 'Package not found'
                ], 404);
            }

            // ==================================================
            // ✅ CALCULATIONS
            // ==================================================

            $amount = $package->amount;

            $percentage = $package->percentage;

            $user_invest_amount = ($amount * $percentage) / 100;
            
            $remaining3x = $user_invest_amount * 3;

            // ==================================================
            // ✅ USER EARNING
            // ==================================================

            $earning = UserEarning::firstOrCreate([
                'user_id' => $user->id
            ]);

            $earning->total_invest += $user_invest_amount;

            $earning->remaining_income += $remaining3x;

            $earning->save();

            // ======================================
            // ✅ ADMIN INCOME UPDATE
            // ======================================

            $admins = Admin::all();

            foreach ($admins as $admin) {

                $admin->total_earning += $user_invest_amount;

                $admin->remaining_amount += $user_invest_amount;

                $admin->save();
            }

              // =====================================
            // ✅ ROYALTY DISTRIBUTION
            // =====================================

            // TOTAL 5%

            $r1Amount = ($user_invest_amount * 2) / 100;

            $r2Amount = ($user_invest_amount * 2) / 100;

            $r3Amount = ($user_invest_amount * 1) / 100;

            // FIRST ROW CREATE / GET
            $royalty = Royalty::first();
            
            if (!$royalty) {

                $royalty = Royalty::create([

                    'R1' => 0,

                    'R2' => 0,

                    'R3' => 0,
                ]);
            }

            // ADD AMOUNT
            $royalty->R1 += $r1Amount;

            $royalty->R2 += $r2Amount;

            $royalty->R3 += $r3Amount;

            $royalty->save();

            // ==================================================
            // ✅ USER ACTIVE
            // ==================================================

            if ($user->status == 0) {

                $user->status = 1;
                $user->save();
            }

           
            

            // ==================================================
            // ✅ PACKAGE HISTORY
            // ==================================================

            PackageHistory::create([

                'user_id'    => $user->id,
                'package_id' => $package->id,
                'amount'     => $amount,
                'type'       => $request->type,
                'tx_hash'    => $request->tx_hash,
            ]);

            
            UserAddress::create([

                'user_id'    => $user->id,
                'package_id' => $package->id,
                'pincode'       => $request->pincode,
                'address'    => $request->address,
            ]);

            // ==================================================
            // ✅ LEVEL INCOME DISTRIBUTION
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
                $upEarning->team_business += $user_invest_amount;

                $upEarning->save();

                // ==========================================
                // ✅ RANK CHECK
                // ==========================================

                $this->checkRank($upline);

                $upline->save();

                // ==========================================
                // ✅ ONLY ACTIVE USER GETS INCOME
                // status != 0
                // ==========================================

                if ($upline->status != 0) {

                    $level = LevelIncome::where('level', $i)->first();

                    if ($level) {

                        // ======================================
                        // ✅ LEVEL INCOME CALCULATION
                        // ======================================

                        $income = ($user_invest_amount * $level->percentage) / 100;

                        // ======================================
                        // ✅ USER EARNING
                        // ======================================

                        $upEarning = UserEarning::firstOrCreate([
                            'user_id' => $upline->id
                        ]);

                        // ======================================
                        // ✅ CHECK REMAINING INCOME
                        // ======================================

                        // if remaining income 0
                        if ($upEarning->remaining_income <= 0) {

                            $uplineId = $upline->sponsor_id;

                            continue;
                        }

                        // ======================================
                        // ✅ IF INCOME > REMAINING
                        // ======================================

                        if ($income > $upEarning->remaining_income) {

                            $income = $upEarning->remaining_income;
                        }

                        // ======================================
                        // ✅ 80% USER
                        // ======================================

                        $incomeearned = ($income * 80) / 100;

                        // ======================================
                        // ✅ 20% RIENNA
                        // ======================================

                        $riennaearn = ($income * 20) / 100;

                        // ======================================
                        // ✅ UPDATE EARNING
                        // ======================================

                        $upEarning->total_earning += $incomeearned;

                        $upEarning->level_income += $incomeearned;

                        $upEarning->rienna_wallet += $riennaearn;

                        // ✅ withdrawal wallet
                        $upEarning->available_withdrawal += $incomeearned;

                        // ✅ minus remaining income
                        $upEarning->remaining_income -= $income;

                        // avoid negative
                        if ($upEarning->remaining_income < 0) {
                            $upEarning->remaining_income = 0;
                        }

                        $upEarning->save();

                        // ======================================
                        // ✅ TRANSACTION HISTORY
                        // ======================================

                        TransactionHistory::create([

                            'user_id' => $upline->id,

                            'from_id' => $user->id,

                            'to_id'   => $upline->id,

                            'level'   => $i,

                            'amount'  => $income,

                            'type'    => 1,

                            'status'  => 1,

                            'remark'  => 'Level Income',
                        ]);
                    }
                }

                // NEXT UPLINE
                $uplineId = $upline->sponsor_id;
            }
            DB::commit();
            return response()->json([

                'status' => true,

                'message' => 'Package Purchased Successfully'
            ]);

        } catch (Exception $e) {
             DB::rollBack();
            return response()->json([

                'status' => false,

                'message' => $e->getMessage(),

                'line' => $e->getLine(),

                'file' => $e->getFile(),
            ], 500);
        }
    }

    // ======================================================
    // ✅ RANK CHECK FUNCTION
    // ======================================================

   public function checkRank($user)
{
    // ======================================
    // ✅ USER EARNING
    // ======================================

    $earning = UserEarning::firstOrCreate([
        'user_id' => $user->id
    ]);

    // ======================================
    // ✅ TOTAL BUSINESS
    // ======================================

    $totalBusiness = $earning->team_business ?? 0;

    // ======================================
    // ✅ GET ALL RANKS
    // ======================================

    $ranks = Rank::orderBy('id', 'asc')->get();

    $totalRequired = 0;

    foreach ($ranks as $rank) {

        // ======================================
        // ✅ ADD PREVIOUS BUSINESS
        // ======================================

        $totalRequired += $rank->total_business;

        // ======================================
        // ✅ CHECK RANK CONDITION
        // ======================================

        if ($totalBusiness >= $totalRequired) {

            
            // ==================================
            // ✅ STATUS UPDATE
            // ==================================

            // Platinum & Diamond
            if ($rank->id >= 3 && $rank->id < 5) {

                $user->status = 3;
            }

            // Ruby & Sapphire
            if ($rank->id >= 5 && $rank->id < 7) {

                $user->status = 4;
            }

            // Emerald+
            if ($rank->id >= 7) {

                $user->status = 5;
            }

            // ==================================
            // ✅ CHECK DUPLICATE HISTORY
            // ==================================

            $exists = TransactionHistory::where([

                'user_id' => $user->id,

                'rank_id' => $rank->id,

                'type' => 2,

                // 0 = pending
                'status' => 0,

            ])->exists();

            // ==================================
            // ✅ CREATE HISTORY
            // ==================================

            if (!$exists) {

                TransactionHistory::create([

                    'user_id' => $user->id,

                    'rank_id' => $rank->id,

                    'amount' => 0,

                    // 2 = Rank Reward
                    'type' => 2,

                    // 0 = Pending
                    'status' => 0,

                    'remark' => $rank->name . ' Rank Reward Pending',
                ]);
            }
        }
    }

    $user->save();
}
}