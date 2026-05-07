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
        Schema::create('package_histories', function (Blueprint $table) {
            $table->id();
            // 👤 User
            $table->foreignId('user_id')
                  ->constrained()
                  ->onDelete('cascade');

            // 📦 Package
            $table->foreignId('package_id')
                  ->constrained()
                  ->onDelete('cascade');

            // 💰 Amount
            $table->decimal('amount', 20, 2);

            /*
                1 = IND
                2 = USER
                3 = ANB
            */
            $table->tinyInteger('type')->default(1);

            // 🔗 Blockchain Tx Hash
            $table->string('tx_hash')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_histories');
    }
};
