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
        Schema::create('transaction_histories', function (Blueprint $table) {
            $table->id();
              // 👤 Main User
            $table->foreignId('user_id')
                  ->nullable()
                  ->constrained()
                  ->nullOnDelete();

            // 📤 From User
            $table->unsignedBigInteger('from_id')->nullable();

            // 📥 To User
            $table->unsignedBigInteger('to_id')->nullable();

            // 🔢 Level
            $table->integer('level')->nullable();

            // 👑 Rank
            $table->unsignedBigInteger('rank_id')->nullable();

            // 💰 Amount
            $table->decimal('amount', 20, 2)
                  ->nullable()
                  ->default(0);

            /*
                TYPES

                1 = Level Income
                2 = Reward Income
                3 = Royalty Income
                4 = Withdrawal
            */
            $table->tinyInteger('type')->nullable();

            /*
                STATUS

                0 = Pending
                1 = Success
                2 = Failed
            */
            $table->tinyInteger('status')
                  ->nullable()
                  ->default(1);

            // 🔗 TX Hash
            $table->string('tx_hash')->nullable();

            // 📝 Remark
            $table->string('remark')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_histories');
    }
};
