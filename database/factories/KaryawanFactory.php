<?php

namespace Database\Factories;

use App\Models\Karyawan;
use App\Models\Departemen;
use Illuminate\Database\Eloquent\Factories\Factory;

class KaryawanFactory extends Factory
{
    protected $model = Karyawan::class;
    
    private static $karyawanData = [
        ['NIK' => 'EMP001', 'nama_karyawan' => 'John Doe', 'id_departemen' => 1],
        ['NIK' => 'EMP002', 'nama_karyawan' => 'Jane Smith', 'id_departemen' => 2],
        ['NIK' => 'EMP003', 'nama_karyawan' => 'Mike Johnson', 'id_departemen' => 1],
        ['NIK' => 'EMP004', 'nama_karyawan' => 'Sarah Williams', 'id_departemen' => 3],
        ['NIK' => 'EMP005', 'nama_karyawan' => 'Robert Brown', 'id_departemen' => 4],
        ['NIK' => 'EMP006', 'nama_karyawan' => 'Emily Davis', 'id_departemen' => 5],
        ['NIK' => 'EMP007', 'nama_karyawan' => 'Michael Wilson', 'id_departemen' => 6],
        ['NIK' => 'EMP008', 'nama_karyawan' => 'Lisa Anderson', 'id_departemen' => 7],
        ['NIK' => 'EMP009', 'nama_karyawan' => 'David Martinez', 'id_departemen' => 8],
        ['NIK' => 'EMP010', 'nama_karyawan' => 'Emma Thompson', 'id_departemen' => 9],
        ['NIK' => 'EMP011', 'nama_karyawan' => 'James Taylor', 'id_departemen' => 10],
        ['NIK' => 'EMP012', 'nama_karyawan' => 'Sophie Clark', 'id_departemen' => 2]
    ];
    
    private static $index = 0;

    public function definition()
    {
        if (self::$index >= count(self::$karyawanData)) {
            self::$index = 0;
        }
        
        $karyawan = self::$karyawanData[self::$index++];
        
        return [
            'NIK' => $karyawan['NIK'],
            'nama_karyawan' => $karyawan['nama_karyawan'],
            'id_departemen' => $karyawan['id_departemen'],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}