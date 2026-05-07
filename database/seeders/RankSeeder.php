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

    [
        'name' => 'Silver',
        'total_business' => 5000,
        'reward' => '10,000 INR VALUE PRODUCT'
    ],

    [
        'name' => 'Gold',
        'total_business' => 10000,
        'reward' => 'MOBILE PHONE (15000 INR VALUE)'
    ],

    [
        'name' => 'Platinum',
        'total_business' => 20000,
        'reward' => 'EV SCOOTER'
    ],

    [
        'name' => 'Diamond',
        'total_business' => 50000,
        'reward' => 'GOLD (100,000 INR VALUE)'
    ],

    [
        'name' => 'Ruby',
        'total_business' => 100000,
        'reward' => 'GOLDE (210,000 INR VALUE)'
    ],

    [
        'name' => 'Sapphire',
        'total_business' => 250000,
        'reward' => 'CAR (1,200,000 INR VALUE)'
    ],

    [
        'name' => 'Emerald',
        'total_business' => 500000,
        'reward' => 'FARM HOUSE WITH CCTV'
    ],

    [
        'name' => 'Elite',
        'total_business' => 5000000,
        'reward' => 'Luxury Car'
    ],

    [
        'name' => 'Titanium',
        'total_business' => 15000000,
        'reward' => 'Dubai Trip'
    ],

    [
        'name' => 'Legend',
        'total_business' => 50000000,
        'reward' => 'Villa'
    ],

    [
        'name' => 'Crown',
        'total_business' => 150000000,
        'reward' => 'Private Jet'
    ],

]);

    }
}
