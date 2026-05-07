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
                'image' => 'p1.webp',
                'amount' => 5,
                'percentage' => 50,
            ],

            [
                'name' => 'Silver',
                'image' => 'p2.webp',
                'amount' => 5,
                'percentage' => 50,
            ],

            [
                'name' => 'Gold',
                'image' => 'p3.webp',
                'amount' => 5,
                'percentage' => 50,
            ],

        ]);
    }
}
