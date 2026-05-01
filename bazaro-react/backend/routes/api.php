<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PaymentController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/orders', [OrderController::class, 'store']);
Route::post('/payments/inr/create-order', [PaymentController::class, 'createInrOrder']);
Route::post('/payments/inr/verify', [PaymentController::class, 'verifyInrPayment']);
Route::post('/payments/usdt/create-intent', [PaymentController::class, 'createUsdtIntent']);
Route::post('/payments/usdt/check-intent', [PaymentController::class, 'checkUsdtIntentStatus']);