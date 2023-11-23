<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class postulate extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'postulate';
    protected $fillable = [
        'date',
        'id_ad',
        'id_people'
    ];

    public function peoples()
    {
        return $this->belongsTo(People::class);
    }
    public function advertisements()
    {
        return $this->belongsTo(Advertisement::class);
    }
}
