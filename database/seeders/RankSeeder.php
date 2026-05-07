<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rank;

class RankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rank::insert([
            ['name' => 'Silver',   'total_business' => 5000,        'reward' => 250],
            ['name' => 'Gold',     'total_business' => 10000,       'reward' => 500],
            ['name' => 'Platinum', 'total_business' => 20000,       'reward' => 1000],
            ['name' => 'Diamond',  'total_business' => 50000,       'reward' => 2500],
            ['name' => 'Ruby',     'total_business' => 150000,      'reward' => 7500],
            ['name' => 'Sapphire', 'total_business' => 500000,      'reward' => 25000],
            ['name' => 'Emerald',  'total_business' => 2000000,     'reward' => 100000],
            ['name' => 'Elite',    'total_business' => 5000000,     'reward' => 250000],
            ['name' => 'Titanium', 'total_business' => 15000000,    'reward' => 750000],
            ['name' => 'Legend',   'total_business' => 50000000,    'reward' => 2500000],
            ['name' => 'Crown',    'total_business' => 150000000,   'reward' => 7500000],
        ]);

    }
}
