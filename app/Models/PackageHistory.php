<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PackageHistory extends Model
{
      protected $fillable = [
        'user_id',
        'package_id',
        'amount',
        'type',
        'tx_hash',
    ];

    // 👤 User Relation
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // 📦 Package Relation
    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
