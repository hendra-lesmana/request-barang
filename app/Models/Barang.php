<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $table = 'barang';
    protected $fillable = ['nama_barang', 'id_lokasi', 'satuan', 'jumlah_stok', 'status'];

    public function lokasi()
    {
        return $this->belongsTo(Lokasi::class, 'id_lokasi');
    }

    public function detailPermintaanBarang()
    {
        return $this->hasMany(DetailPermintaanBarang::class, 'id_barang');
    }
}