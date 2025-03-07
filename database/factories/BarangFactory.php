<?php

namespace Database\Factories;

use App\Models\Barang;
use App\Models\Lokasi;
use Illuminate\Database\Eloquent\Factories\Factory;

class BarangFactory extends Factory
{
    protected $model = Barang::class;
    
    private static $barangData = [
        ['nama_barang' => 'Laptop', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 25],
        ['nama_barang' => 'Printer', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 10],
        ['nama_barang' => 'Paper A4', 'id_lokasi' => 4, 'satuan' => 'Box', 'jumlah_stok' => 100],
        ['nama_barang' => 'Office Chair', 'id_lokasi' => 1, 'satuan' => 'Unit', 'jumlah_stok' => 30],
        ['nama_barang' => 'Desk', 'id_lokasi' => 1, 'satuan' => 'Unit', 'jumlah_stok' => 20],
        ['nama_barang' => 'Ink Cartridge', 'id_lokasi' => 2, 'satuan' => 'Piece', 'jumlah_stok' => 50],
        ['nama_barang' => 'Mouse', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 40],
        ['nama_barang' => 'Keyboard', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 40],
        ['nama_barang' => 'Monitor', 'id_lokasi' => 1, 'satuan' => 'Unit', 'jumlah_stok' => 15],
        ['nama_barang' => 'Stapler', 'id_lokasi' => 5, 'satuan' => 'Unit', 'jumlah_stok' => 60],
        ['nama_barang' => 'Headset', 'id_lokasi' => 6, 'satuan' => 'Unit', 'jumlah_stok' => 25],
        ['nama_barang' => 'Webcam', 'id_lokasi' => 6, 'satuan' => 'Unit', 'jumlah_stok' => 15]
    ];
    
    private static $index = 0;

    public function definition()
    {
        if (self::$index >= count(self::$barangData)) {
            self::$index = 0;
        }
        
        $barang = self::$barangData[self::$index++];
        
        return [
            'nama_barang' => $barang['nama_barang'],
            'id_lokasi' => $barang['id_lokasi'],
            'satuan' => $barang['satuan'],
            'jumlah_stok' => $barang['jumlah_stok'],
            'status' => 'active',
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}