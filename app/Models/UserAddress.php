<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAddress extends Model
{
    protected $table = 'useraddresses';
    protected $fillable = [
    'user_id',
    'package_id',
    'address',
    'pincode',
    'status',

];

 // 👤 USER
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // 📦 PACKAGE
    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
