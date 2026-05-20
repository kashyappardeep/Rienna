<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Rank;
use App\Models\LevelIncome;
use App\Models\UserEarning;
use App\Models\PackageHistory;
use App\Models\TransactionHistory;
use App\Models\UserAddress;

class AdminDashboardController extends Controller
{
      // =========================================
    // ✅ ALL PACKAGE HISTORY
    // =========================================

    public function packageHistory()
    {
        try {

            $history = PackageHistory::with([

                // 👤 USER
                'user',

                // 📦 PACKAGE
                'package',

                // 📍 USER ADDRESS
                'user.addresses',

            ])
            ->orderBy('id', 'desc')
            ->get();

            return response()->json([

                'status' => true,

                'message' => 'All Package History Fetched',

                'data' => $history,

            ]);

        } catch (\Exception $e) {

            return response()->json([

                'status' => false,

                'message' => $e->getMessage(),

            ], 500);
        }
    }

    public function updateAddressStatus(Request $request)
{
    try {

        $request->validate([

            'address_id' => 'required|exists:useraddresses,id',

            'admin_action' => 'required|in:1,2',
        ]);

        // FIND ADDRESS
        $address = UserAddress::find($request->address_id);

        // =====================================
        // ADMIN 1 => STATUS 2
        // =====================================

        if ($request->admin_action == 1) {

            $address->status = 2;
        }

        // =====================================
        // ADMIN 2 => STATUS 3
        // =====================================

        if ($request->admin_action == 2) {

            $address->status = 3;
        }

        $address->save();

        return response()->json([

            'status' => true,

            'message' => 'Address Status Updated Successfully',

            'data' => $address,
        ]);

    } catch (\Exception $e) {

        return response()->json([

            'status' => false,

            'message' => $e->getMessage(),
        ], 500);
    }
}
}
