<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    public function store(Request $request)
    {
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

        return response()->json([
            'message' => 'Order stored successfully',
            'order' => $record,
        ], 201);
    }
}
