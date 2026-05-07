<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
     protected $fillable = [

        'email',
        'password',

        'total_earning',
        'total_withdrawal',
        'remaining_amount',
    ];
     protected $hidden = [
        'password',
    ];
}
