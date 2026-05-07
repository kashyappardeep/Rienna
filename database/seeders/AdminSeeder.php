<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Admin::create([
            'email' => 'rienna@gmail.com',
            'password' => Hash::make('123456'),

            'total_earning' => 0,
            'total_withdrawal' => 0,
            'remaining_amount' => 0,
        ],
        [
            'email' => 'ultra@gmail.com',
            'password' => Hash::make('123456'),

            'total_earning' => 0,
            'total_withdrawal' => 0,
            'remaining_amount' => 0,
        ]);
    }
}
