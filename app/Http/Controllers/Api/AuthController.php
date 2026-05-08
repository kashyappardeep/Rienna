<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; 
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // ✅ Register
 public function register(Request $request)
{
    try {

        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'phone' => 'required|unique:users',
            'password' => 'required|min:6',
            'referral_code' => 'nullable'
        ]);

        // 🔍 sponsor find
        $sponsor = null;

        if ($request->referral_code) {

            $sponsor = User::where(
                'referral_code',
                $request->referral_code
            )->first();

            // ❌ invalid referral
            if (!$sponsor) {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid referral code'
                ], 400);
            }
        }

        // 🔥 generate unique referral code
        do {
            $myReferral = strtoupper(substr(md5(time() . rand()), 0, 8));
        } while (
            User::where('referral_code', $myReferral)->exists()
        );

        // ✅ create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'sponsor_id' => $sponsor ? $sponsor->id : null,
            'referral_code' => $myReferral,
            'status' => 0
        ]);

        return response()->json([
            'status' => true,
            'message' => 'User Registered Successfully',
            'user' => $user
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {

        return response()->json([
            'status' => false,
            'message' => 'Validation Error',
            'errors' => $e->errors()
        ], 422);

    } catch (\Exception $e) {

        return response()->json([
            'status' => false,
            'message' => 'Something went wrong',
            'error' => $e->getMessage()
        ], 500);
    }
}

    // ✅ Login
    public function login(Request $request)
{
    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {

        return response()->json([
            'status' => false,
            'message' => 'Invalid credentials'
        ], 401);
    }

    // ✅ TOKEN
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([

        'status' => true,

        'message' => 'Login Success',

        'token' => $token,

        'user' => $user
    ]);
}
}
