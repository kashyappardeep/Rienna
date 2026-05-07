<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransactionHistory extends Model
{
    protected $fillable = [

        'user_id',

        'from_id',
        'to_id',

        'level',

        'rank_id',

        'royalty_amount',
        'withdrawal_amount',
        'amount',

        'type',
        'status',

        'tx_hash',
    ];

    // 👤 Main User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // 📤 From User
    public function fromUser()
    {
        return $this->belongsTo(User::class, 'from_id');
    }

    // 📥 To User
    public function toUser()
    {
        return $this->belongsTo(User::class, 'to_id');
    }

    // 👑 Rank
    public function rank()
    {
        return $this->belongsTo(Rank::class);
    }
}
