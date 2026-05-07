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
        Schema::create('royalties', function (Blueprint $table) {
            $table->id();
            // 👑 Royalty Amounts
            $table->decimal('R1', 20, 2)
                  ->nullable();

            $table->decimal('R2', 20, 2)
                  ->nullable();

            $table->decimal('R3', 20, 2)
                  ->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('royalties');
    }
};
