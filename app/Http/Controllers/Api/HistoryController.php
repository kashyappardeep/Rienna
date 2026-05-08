<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\UserEarning;
use App\Models\TransactionHistory;
use App\Models\PackageHistory;
use Illuminate\Support\Facades\Auth;

class HistoryController extends Controller
{
   public function userHistory()
{
    $user = Auth::user();

    if (!$user) {

        return response()->json([
            'status' => false,
            'message' => 'Unauthenticated User'
        ], 401);
    }

    // ===========================
    // ✅ USER EARNING
    // ===========================

    $earning = UserEarning::where('user_id', $user->id)->first();

    // ===========================
    // ✅ TRANSACTIONS (ALL)
    // ===========================

    $transactions = TransactionHistory::where('user_id', $user->id)
        ->orderBy('id', 'desc')
        ->get()
        ->groupBy('type');

    // ===========================
    // ✅ PACKAGE HISTORY
    // ===========================

    $packages = PackageHistory::where('user_id', $user->id)
        ->orderBy('id', 'desc')
        ->get();

    // ===========================
    // ✅ RESPONSE
    // ===========================

    return response()->json([

        'status' => true,

        'message' => 'User History Fetched Successfully',

        'data' => [

            // 📊 Income Summary
            'earning' => $earning,

            // 📜 TYPE WISE TRANSACTIONS
            'transactions' => [

                // 1 = Level Income
                'level_income' => $transactions[1] ?? [],

                // 2 = Reward Income
                'reward_income' => $transactions[2] ?? [],

                // 3 = Royalty Income
                'royalty_income' => $transactions[3] ?? [],

                // 4 = Withdrawal
                'withdrawal' => $transactions[4] ?? [],
            ],

            // 📦 Package History
            'packages' => $packages,
        ]
    ]);
}
}