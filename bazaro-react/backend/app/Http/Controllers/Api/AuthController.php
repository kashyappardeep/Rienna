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
        $sponsor = User::where('referral_code', $request->referral_code)->first();

        // ❗ invalid referral check
        if (!$sponsor) {
            return response()->json([
                'message' => 'Invalid referral code'
            ], 400);
        }
    }

    // 🔥 generate unique referral code
    do {
        $myReferral = strtoupper(substr(md5(time().rand()), 0, 8));
    } while (User::where('referral_code', $myReferral)->exists());

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'phone' => $request->phone,
        'password' => Hash::make($request->password),
        'sponsor_id' => $sponsor ? $sponsor->id : null,
        'referral_code' => $myReferral // ✅ MUST
    ]);

    return response()->json([
        'message' => 'User Registered',
        'user' => $user
    ]);
}

    // ✅ Login
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return response()->json([
            'message' => 'Login Success',
            'user' => $user
        ]);
    }

    // ✅ Logout (frontend state logout support)
    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json([
            'message' => 'Logout Success'
        ]);
    }
}
