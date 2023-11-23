<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class companies extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'companies';
    protected $fillable = [
        'company_name',
        'main_address',
        'mail',
        'phone_number',
        'number_of_employees',
        'id_sector'
    ];
    public function sectors()
    {
        return $this->belongsTo(Sector::class);
    }
    public function advertisement()
    {
        return $this->hasMany(Advertisement::class);
    }
}
