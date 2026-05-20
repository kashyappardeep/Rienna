<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;


class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        try {

            $request->validate([

                'email' => 'required|email',

                'password' => 'required',
            ]);

            // dd($request->all());

            // ✅ FIND ADMIN
            $admin = Admin::where('email', $request->email)->first();

            // ❌ INVALID
            if (!$admin || !Hash::check($request->password, $admin->password)) {

                return response()->json([

                    'status' => false,

                    'message' => 'Invalid Credentials'
                ], 401);
            }

            // ✅ TOKEN
            $token = $admin->createToken('admin_token')->plainTextToken;

            return response()->json([

                'status' => true,

                'message' => 'Admin Login Success',

                'token' => $token,

                'admin' => $admin,
            ]);

        } catch (\Exception $e) {

            return response()->json([

                'status' => false,

                'message' => 'Something went wrong',

                'error' => $e->getMessage(),
            ], 500);
        }
    }
}