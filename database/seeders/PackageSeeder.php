<?php

namespace Database\Seeders;
use App\Models\Package;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Package::insert([

            [
                'name' => 'Starter',
                'image' => 'starter.png',
                'amount' => 250,
                'percentage' => 5,
            ],

            [
                'name' => 'Silver',
                'image' => 'silver.png',
                'amount' => 500,
                'percentage' => 7,
            ],

            [
                'name' => 'Gold',
                'image' => 'gold.png',
                'amount' => 1000,
                'percentage' => 10,
            ],

        ]);
    }
}
