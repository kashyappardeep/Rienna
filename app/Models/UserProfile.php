<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
     protected $fillable = [
        'user_id',
        'upi_id',
        'usdt_address',
    ];

    // 🔗 relation
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
