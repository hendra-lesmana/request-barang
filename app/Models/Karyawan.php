<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Karyawan extends Model
{
    protected $table = 'karyawan';
    protected $fillable = ['nama_karyawan', 'id_departemen'];

    public function departemen()
    {
        return $this->belongsTo(Departemen::class, 'id_departemen');
    }

    public function permintaanBarang()
    {
        return $this->hasMany(PermintaanBarang::class, 'id_karyawan');
    }
}