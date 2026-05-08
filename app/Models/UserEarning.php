<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserEarning extends Model
{
    protected $fillable = [
        'user_id',

        'total_earning',

        'level_income',
        'royalty_income',
        'reward_income',
        'team_business',
        'available_withdrawal',
        'total_withdrawal',

        'rienna_wallet',

        'total_invest',

        'remaining_income',
    ];

    // 🔗 relation
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
