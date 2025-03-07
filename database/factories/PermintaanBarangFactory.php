<?php

namespace Database\Factories;

use App\Models\PermintaanBarang;
use App\Models\Karyawan;
use Illuminate\Database\Eloquent\Factories\Factory;

class PermintaanBarangFactory extends Factory
{
    protected $model = PermintaanBarang::class;
    
    private static $permintaanData = [
        ['nama_permintaan_barang' => 'Office Equipment Request Q1', 'id_karyawan' => 1],
        ['nama_permintaan_barang' => 'IT Supplies Request', 'id_karyawan' => 3],
        ['nama_permintaan_barang' => 'New Employee Setup', 'id_karyawan' => 2],
        ['nama_permintaan_barang' => 'Department Supplies', 'id_karyawan' => 4],
        ['nama_permintaan_barang' => 'Annual Stock Request', 'id_karyawan' => 5],
        ['nama_permintaan_barang' => 'Marketing Equipment', 'id_karyawan' => 6],
        ['nama_permintaan_barang' => 'Sales Team Setup', 'id_karyawan' => 7],
        ['nama_permintaan_barang' => 'R&D Lab Equipment', 'id_karyawan' => 8],
        ['nama_permintaan_barang' => 'Customer Service Tools', 'id_karyawan' => 9],
        ['nama_permintaan_barang' => 'QA Testing Equipment', 'id_karyawan' => 10]
    ];
    
    private static $index = 0;

    public function definition()
    {
        if (self::$index >= count(self::$permintaanData)) {
            self::$index = 0;
        }
        
        $permintaan = self::$permintaanData[self::$index++];
        
        return [
            'nama_permintaan_barang' => $permintaan['nama_permintaan_barang'],
            'id_karyawan' => $permintaan['id_karyawan'],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}