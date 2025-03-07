<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailPermintaanBarang extends Model
{
    protected $table = 'detail_permintaan_barang';
    protected $fillable = [
        'id_permintaan_barang',
        'id_barang',
        'nama_barang',
        'id_lokasi',
        'nama_lokasi',
        'kuantiti',
        'keterangan',
        'status'
    ];

    public function permintaanBarang()
    {
        return $this->belongsTo(PermintaanBarang::class, 'id_permintaan_barang');
    }

    public function barang()
    {
        return $this->belongsTo(Barang::class, 'id_barang');
    }

    public function lokasi()
    {
        return $this->belongsTo(Lokasi::class, 'id_lokasi');
    }
}