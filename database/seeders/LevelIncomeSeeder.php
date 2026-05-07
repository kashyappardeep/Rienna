<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LevelIncome;

class LevelIncomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LevelIncome::insert([
            ['level' => 1,  'percentage' => 20],
            ['level' => 2,  'percentage' => 15],
            ['level' => 3,  'percentage' => 10],
            ['level' => 4,  'percentage' => 8],
            ['level' => 5,  'percentage' => 7],
            ['level' => 6,  'percentage' => 6],
            ['level' => 7,  'percentage' => 5],
            ['level' => 8,  'percentage' => 5],
            ['level' => 9,  'percentage' => 4],
            ['level' => 10, 'percentage' => 4],
            ['level' => 11, 'percentage' => 3],
            ['level' => 12, 'percentage' => 3],
            ['level' => 13, 'percentage' => 3],
            ['level' => 14, 'percentage' => 3],
            ['level' => 15, 'percentage' => 4],
        ]);
    }
}
