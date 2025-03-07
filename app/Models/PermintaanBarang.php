<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PermintaanBarang extends Model
{
    protected $table = 'permintaan_barang';
    protected $fillable = ['nama_permintaan_barang', 'id_karyawan'];

    public function karyawan()
    {
        return $this->belongsTo(Karyawan::class, 'id_karyawan');
    }

    public function detailPermintaanBarang()
    {
        return $this->hasMany(DetailPermintaanBarang::class, 'id_permintaan_barang');
    }
}