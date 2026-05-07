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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
             // 📧 Email
            $table->string('email')->unique();

            // 🔒 Password
            $table->string('password');

            // 💰 Earnings
            $table->decimal('total_earning', 20, 2)
                  ->default(0);

            // 💸 Total Withdrawal
            $table->decimal('total_withdrawal', 20, 2)
                  ->default(0);

            // ⏳ Remaining Amount
            $table->decimal('remaining_amount', 20, 2)
                  ->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
