<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_earnings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                  ->constrained()
                  ->onDelete('cascade');

            // 💰 Earnings
            $table->decimal('total_earning', 20, 2)->default(0);
            $table->decimal('team_business', 20, 2)->default(0);

            $table->decimal('level_income', 20, 2)->default(0);
            $table->decimal('royalty_income', 20, 2)->default(0);
            $table->decimal('reward_income', 20, 2)->default(0);

            // 💸 Withdrawals
            $table->decimal('total_withdrawal', 20, 2)->default(0);

            // 👛 Wallet
            $table->decimal('rienna_wallet', 20, 2)->default(0);

            // 📈 Investment
            $table->decimal('total_invest', 20, 2)->default(0);

            // ⏳ Remaining
            $table->decimal('remaining_income', 20, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_earnings');
    }
};
