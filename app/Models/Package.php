<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
     protected $fillable = [
        'name',
        'image',
        'amount',
        'percentage',
    ];

    // 📜 Histories Relation
    public function histories()
    {
        return $this->hasMany(PackageHistory::class);
    }
   
}

