<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class type extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'type';
    protected $fillable = [
        'type'
    ];

    public function advertisement()
    {
        return $this->hasMany(Advertisement::class);
    }
}