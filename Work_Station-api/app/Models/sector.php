<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sector extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'sector';
    protected $fillable = [
        'libelle'
    ];
    public function advertisement()
    {
        return $this->hasMany(Advertisement::class);
    }
}
