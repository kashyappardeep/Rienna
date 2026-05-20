<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasApiTokens;

    protected $fillable = [

        'email',
        'password',
        'total_earning',
        'total_withdrawal',
        'remaining_amount',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}