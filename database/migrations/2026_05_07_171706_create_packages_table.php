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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            // 📦 Package Name
            $table->string('name');

            // 🖼 Image
            $table->string('image')->nullable();

            // 💰 Amount
            $table->decimal('amount', 20, 2);

            // 📈 Percentage
            $table->decimal('percentage', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
