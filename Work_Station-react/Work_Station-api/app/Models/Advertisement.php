<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Advertisement extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'advertisement';
    protected $fillable = [
        'title',
        'description',
        'address',
        'wages',
        'schedule',
        'id_company',
        'id_sector',
        'id_type'
    ];

    public function types()
    {
        return $this->belongsTo(Type::class);
    }

    public function secteurs()
    {
        return $this->belongsTo(sector::class);
    }

    public function companies()
    {
        return $this->belongsTo(Companies::class);
    }
    public function postulate()
    {
        return $this->hasMany(Postulate::class);
    }
    public function peoples()
    {
        return $this->belongsToMany(People::class, 'favorite');
    }
}
