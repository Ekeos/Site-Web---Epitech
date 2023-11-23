<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class people extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    public $timestamps = false;
    protected $table = 'people';
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'created_at',
        'password',
        'phone_number',
        'address',
        'id_type',
        'isAdmin'
    ];

    //We hash the password for more safety
    protected $casts = [
        'password' => 'hashed',
    ];

    public function types()
    {
        return $this->belongsTo(Type::class);
    }
    public function postulate()
    {
        return $this->hasMany(Postulate::class);
    }
    public function advertisements()
    {
        return $this->belongsToMany(Advertisement::class, 'favorite');
    }
}
