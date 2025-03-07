<?php

namespace Database\Factories;

use App\Models\DetailPermintaanBarang;
use App\Models\PermintaanBarang;
use App\Models\Barang;
use App\Models\Lokasi;
use Illuminate\Database\Eloquent\Factories\Factory;

class DetailPermintaanBarangFactory extends Factory
{
    protected $model = DetailPermintaanBarang::class;
    
    private static $detailData = [
        ['id_permintaan_barang' => 1, 'id_barang' => 1, 'nama_barang' => 'Laptop', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 2, 'keterangan' => 'For new employees', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 1, 'id_barang' => 7, 'nama_barang' => 'Mouse', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 2, 'keterangan' => 'For new employees', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 2, 'id_barang' => 2, 'nama_barang' => 'Printer', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 1, 'keterangan' => 'IT Department printer', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 2, 'id_barang' => 6, 'nama_barang' => 'Ink Cartridge', 'id_lokasi' => 2, 'nama_lokasi' => 'Warehouse B', 'kuantiti' => 5, 'keterangan' => 'Printer supplies', 'status' => 'Tidak Terpenuhi'],
        ['id_permintaan_barang' => 3, 'id_barang' => 4, 'nama_barang' => 'Office Chair', 'id_lokasi' => 1, 'nama_lokasi' => 'Warehouse A', 'kuantiti' => 3, 'keterangan' => 'New employee setup', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 3, 'id_barang' => 5, 'nama_barang' => 'Desk', 'id_lokasi' => 1, 'nama_lokasi' => 'Warehouse A', 'kuantiti' => 3, 'keterangan' => 'New employee setup', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 4, 'id_barang' => 3, 'nama_barang' => 'Paper A4', 'id_lokasi' => 4, 'nama_lokasi' => 'Main Storage', 'kuantiti' => 10, 'keterangan' => 'Monthly supply', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 5, 'id_barang' => 10, 'nama_barang' => 'Stapler', 'id_lokasi' => 5, 'nama_lokasi' => 'Supply Room', 'kuantiti' => 5, 'keterangan' => 'Office supplies', 'status' => 'Tidak Terpenuhi'],
        ['id_permintaan_barang' => 6, 'id_barang' => 11, 'nama_barang' => 'Headset', 'id_lokasi' => 6, 'nama_lokasi' => 'IT Storage', 'kuantiti' => 4, 'keterangan' => 'Marketing team equipment', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 7, 'id_barang' => 8, 'nama_barang' => 'Keyboard', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 6, 'keterangan' => 'Sales department', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 8, 'id_barang' => 1, 'nama_barang' => 'Laptop', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 3, 'keterangan' => 'R&D team laptops', 'status' => 'Tidak Terpenuhi'],
        ['id_permintaan_barang' => 9, 'id_barang' => 12, 'nama_barang' => 'Webcam', 'id_lokasi' => 6, 'nama_lokasi' => 'IT Storage', 'kuantiti' => 8, 'keterangan' => 'CS team equipment', 'status' => 'Terpenuhi'],
        ['id_permintaan_barang' => 10, 'id_barang' => 9, 'nama_barang' => 'Monitor', 'id_lokasi' => 1, 'nama_lokasi' => 'Warehouse A', 'kuantiti' => 4, 'keterangan' => 'QA testing stations', 'status' => 'Terpenuhi']
    ];
    
    private static $index = 0;

    public function definition()
    {
        if (self::$index >= count(self::$detailData)) {
            self::$index = 0;
        }
        
        $detail = self::$detailData[self::$index++];
        
        return [
            'id_permintaan_barang' => $detail['id_permintaan_barang'],
            'id_barang' => $detail['id_barang'],
            'nama_barang' => $detail['nama_barang'],
            'id_lokasi' => $detail['id_lokasi'],
            'nama_lokasi' => $detail['nama_lokasi'],
            'kuantiti' => $detail['kuantiti'],
            'keterangan' => $detail['keterangan'],
            'status' => $detail['status'],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}