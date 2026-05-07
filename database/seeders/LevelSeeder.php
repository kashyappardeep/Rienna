<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Level;

class LevelSeeder extends Seeder
{
    public function run(): void
    {
        Level::insert([
            ['level' => 1, 'percentage' => 30],
            ['level' => 2, 'percentage' => 20],
            ['level' => 3, 'percentage' => 10],
            ['level' => 4, 'percentage' => 5],

            ['level' => 5, 'percentage' => 3],
            ['level' => 6, 'percentage' => 3],
            ['level' => 7, 'percentage' => 3],
            ['level' => 8, 'percentage' => 3],
            ['level' => 9, 'percentage' => 3],
            ['level' => 10, 'percentage' => 3],
            ['level' => 11, 'percentage' => 3],
            ['level' => 12, 'percentage' => 3],
            ['level' => 13, 'percentage' => 3],
            ['level' => 14, 'percentage' => 3],

            ['level' => 15, 'percentage' => 5],
        ]);
    }
}