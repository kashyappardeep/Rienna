<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class PaymentController extends Controller
{
    private function usdtIntentsPath(): string
    {
        return 'usdt_intents.json';
    }

    private function readUsdtIntents(): array
    {
        $disk = Storage::disk('local');
        $path = $this->usdtIntentsPath();
        if (!$disk->exists($path)) {
            return [];
        }
        $decoded = json_decode($disk->get($path), true);
        return is_array($decoded) ? $decoded : [];
    }

    private function writeUsdtIntents(array $intents): void
    {
        Storage::disk('local')->put($this->usdtIntentsPath(), json_encode($intents, JSON_PRETTY_PRINT));
    }

    public function createInrOrder(Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required|numeric|min:1',
            'currency' => 'nullable|string|max:10',
            'receipt' => 'nullable|string|max:50',
        ]);

        $keyId = (string) config('services.razorpay.key_id');
        $keySecret = (string) config('services.razorpay.key_secret');

        if ($keyId === '' || $keySecret === '') {
            return response()->json(['message' => 'Razorpay keys are not configured.'], 500);
        }

        $amountPaise = (int) round(((float) $validated['amount']) * 100);
        $currency = strtoupper((string) ($validated['currency'] ?? 'INR'));

        $response = Http::withBasicAuth($keyId, $keySecret)
            ->post('https://api.razorpay.com/v1/orders', [
                'amount' => $amountPaise,
                'currency' => $currency,
                'receipt' => $validated['receipt'] ?? ('rin_' . time()),
                'payment_capture' => 1,
            ]);

        if (!$response->successful()) {
            return response()->json([
                'message' => 'Unable to create Razorpay order',
                'error' => $response->json() ?: $response->body(),
            ], 502);
        }

        $payload = $response->json();

        return response()->json([
            'key' => $keyId,
            'order' => [
                'id' => $payload['id'] ?? null,
                'amount' => $payload['amount'] ?? $amountPaise,
                'currency' => $payload['currency'] ?? $currency,
            ],
        ]);
    }

    public function verifyInrPayment(Request $request)
    {
        $validated = $request->validate([
            'razorpay_order_id' => 'required|string',
            'razorpay_payment_id' => 'required|string',
            'razorpay_signature' => 'required|string',
        ]);

        $keySecret = (string) config('services.razorpay.key_secret');
        if ($keySecret === '') {
            return response()->json(['message' => 'Razorpay secret is not configured.'], 500);
        }

        $generated = hash_hmac(
            'sha256',
            $validated['razorpay_order_id'] . '|' . $validated['razorpay_payment_id'],
            $keySecret
        );

        if (!hash_equals($generated, $validated['razorpay_signature'])) {
            return response()->json(['message' => 'Invalid payment signature.'], 400);
        }

        return response()->json([
            'verified' => true,
            'payment_id' => $validated['razorpay_payment_id'],
            'order_id' => $validated['razorpay_order_id'],
        ]);
    }

    public function createUsdtIntent(Request $request)
    {
        $validated = $request->validate([
            'usd_amount' => 'required|numeric|min:0.01',
            'network' => 'nullable|string|max:20',
            'items' => 'nullable|array',
        ]);

        $network = strtoupper((string) ($validated['network'] ?? config('services.usdt_testnet.network', 'BSC-TESTNET')));
        $rate = (float) config('services.usdt_testnet.usd_to_usdt', 1);
        $address = (string) config('services.usdt_testnet.address');

        if ($address === '') {
            return response()->json(['message' => 'USDT testnet address is not configured.'], 500);
        }

        $usdtAmount = round(((float) $validated['usd_amount']) * $rate, 6);
        $intentId = 'usdt_test_' . now()->format('YmdHis') . '_' . random_int(1000, 9999);
        $createdAtTs = now()->timestamp;

        $intents = $this->readUsdtIntents();
        $intents[$intentId] = [
            'intent_id' => $intentId,
            'network' => $network,
            'address' => $address,
            'amount_usdt' => $usdtAmount,
            'created_at' => $createdAtTs,
            'status' => 'pending',
            'items' => $validated['items'] ?? [],
        ];
        $this->writeUsdtIntents($intents);

        return response()->json([
            'intent_id' => $intentId,
            'network' => $network,
            'address' => $address,
            'amount_usdt' => $usdtAmount,
            'expires_in_seconds' => 300,
            'note' => 'Testnet payment. System will auto-check incoming transfer.',
        ]);
    }

    public function checkUsdtIntentStatus(Request $request)
    {
        $validated = $request->validate([
            'intent_id' => 'required|string|max:100',
            'tx_hash' => 'nullable|string|max:100',
        ]);

        $intents = $this->readUsdtIntents();
        $intent = $intents[$validated['intent_id']] ?? null;
        if (!$intent) {
            return response()->json(['message' => 'Intent not found.'], 404);
        }

        if (($intent['status'] ?? '') === 'paid') {
            return response()->json([
                'verified' => true,
                'intent_id' => $intent['intent_id'],
                'status' => 'paid',
                'tx_hash' => $intent['tx_hash'] ?? null,
            ]);
        }

        // Manual verification with provided tx_hash
        $manualTxHash = $validated['tx_hash'] ?? null;
        if ($manualTxHash) {
            $rpcUrl = (string) config('services.usdt_testnet.rpc_url');
            if ($rpcUrl) {
                $receiptResponse = Http::post($rpcUrl, [
                    'jsonrpc' => '2.0',
                    'id' => 99,
                    'method' => 'eth_getTransactionReceipt',
                    'params' => [$manualTxHash],
                ]);
                if ($receiptResponse->successful()) {
                    $receipt = $receiptResponse->json()['result'] ?? null;
                    if ($receipt && isset($receipt['status']) && $receipt['status'] === '0x1') {
                        // Transaction is confirmed, check if it matches our intent
                        $toAddress = strtolower((string) $intent['address']);
                        $contract = strtolower((string) config('services.usdt_testnet.token_contract'));
                        $decimals = (int) config('services.usdt_testnet.token_decimals', 18);
                        $requiredRaw = (float) $intent['amount_usdt'] * (10 ** $decimals);
                        
                        // Check if transaction was to the token contract
                        $txTo = strtolower($receipt['to'] ?? '');
                        $logs = $receipt['logs'] ?? [];
                        
                        foreach ($logs as $log) {
                            $logAddress = strtolower($log['address'] ?? '');
                            $topics = $log['topics'] ?? [];
                            // Check Transfer event (0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef)
                            if ($logAddress === $contract && count($topics) >= 3) {
                                // topics[2] is the recipient address (padded)
                                $recipient = strtolower(substr($topics[2], 26));
                                if ($recipient === substr($toAddress, 2)) {
                                    $dataHex = (string) ($log['data'] ?? '0x0');
                                    $value = (float) hexdec($dataHex);
                                    if ($value >= $requiredRaw * 0.95) { // Allow 5% tolerance
                                        $intent['status'] = 'paid';
                                        $intent['tx_hash'] = $manualTxHash;
                                        $intent['paid_at'] = now()->toISOString();
                                        $intents[$intent['intent_id']] = $intent;
                                        $this->writeUsdtIntents($intents);
                                        
                                        return response()->json([
                                            'verified' => true,
                                            'intent_id' => $intent['intent_id'],
                                            'status' => 'paid',
                                            'tx_hash' => $manualTxHash,
                                            'note' => 'Verified via provided transaction hash',
                                        ]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        $rpcUrl = (string) config('services.usdt_testnet.rpc_url');
        $contract = strtolower((string) config('services.usdt_testnet.token_contract'));
        $decimals = (int) config('services.usdt_testnet.token_decimals', 18);
        $lookbackBlocks = (int) config('services.usdt_testnet.lookback_blocks', 10000);

        if ($rpcUrl === '' || $contract === '') {
            return response()->json(['message' => 'USDT checker config missing (rpc/contract).'], 500);
        }

        $latestBlockResponse = Http::post($rpcUrl, [
            'jsonrpc' => '2.0',
            'id' => 1,
            'method' => 'eth_blockNumber',
            'params' => [],
        ]);
        if (!$latestBlockResponse->successful()) {
            return response()->json(['message' => 'Unable to query chain block number.'], 502);
        }
        $latestHex = data_get($latestBlockResponse->json(), 'result', '0x0');
        $latest = hexdec((string) $latestHex);
        $from = max(0, $latest - $lookbackBlocks);

        $toAddress = strtolower((string) $intent['address']);
        $toTopic = '0x000000000000000000000000' . str_pad(substr($toAddress, 2), 40, '0', STR_PAD_LEFT);
        $transferTopic = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

        $logsResponse = Http::post($rpcUrl, [
            'jsonrpc' => '2.0',
            'id' => 2,
            'method' => 'eth_getLogs',
            'params' => [[
                'fromBlock' => '0x' . dechex($from),
                'toBlock' => 'latest',
                'address' => $contract,
                'topics' => [$transferTopic, null, $toTopic],
            ]],
        ]);
        if (!$logsResponse->successful()) {
            return response()->json(['message' => 'Unable to query transfer logs.'], 502);
        }

        $requiredRaw = (float) $intent['amount_usdt'] * (10 ** $decimals);
        $logs = data_get($logsResponse->json(), 'result', []);
        $matched = null;

        foreach (array_reverse($logs) as $log) {
            $dataHex = (string) ($log['data'] ?? '0x0');
            $value = (float) hexdec($dataHex);
            if ($value >= $requiredRaw) {
                $matched = $log;
                break;
            }
        }

        if ($matched) {
            $intent['status'] = 'paid';
            $intent['tx_hash'] = $matched['transactionHash'] ?? null;
            $intent['paid_at'] = now()->toISOString();
            $intents[$intent['intent_id']] = $intent;
            $this->writeUsdtIntents($intents);

            return response()->json([
                'verified' => true,
                'intent_id' => $intent['intent_id'],
                'status' => 'paid',
                'tx_hash' => $intent['tx_hash'],
            ]);
        }

        return response()->json([
            'verified' => false,
            'intent_id' => $intent['intent_id'],
            'status' => 'pending',
        ]);
    }
}