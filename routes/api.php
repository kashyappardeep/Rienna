<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\Admin\LevelController;
use App\Http\Controllers\Api\Admin\RankController;
use App\Http\Controllers\Api\HistoryController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/packages', [PackageController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/buy-package', [PackageController::class, 'buyPackage']);

    // HISTORY ROUTES
    Route::get('/user/history', [HistoryController::class, 'userHistory']);
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/orders', [OrderController::class, 'store']);
    Route::post('/payments/inr/create-order', [PaymentController::class, 'createInrOrder']);
    Route::post('/payments/inr/verify', [PaymentController::class, 'verifyInrPayment']);
    Route::post('/payments/usdt/create-intent', [PaymentController::class, 'createUsdtIntent']);
    Route::post('/payments/usdt/check-intent', [PaymentController::class, 'checkUsdtIntentStatus']);
});
// LEVEL ROUTES
Route::prefix('admin/levels')->group(function () {
    Route::get('/', [LevelController::class, 'index']);
    Route::post('/store', [LevelController::class, 'store']);
    Route::post('/update/{id}', [LevelController::class, 'update']);
    Route::delete('/delete/{id}', [LevelController::class, 'destroy']);
});

// RANK ROUTES
Route::prefix('admin/ranks')->group(function () {
    Route::get('/', [RankController::class, 'index']);
    Route::post('/store', [RankController::class, 'store']);
    Route::post('/update/{id}', [RankController::class, 'update']);
    Route::delete('/delete/{id}', [RankController::class, 'destroy']);
});