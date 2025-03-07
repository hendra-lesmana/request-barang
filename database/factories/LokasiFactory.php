<?php

namespace Database\Factories;

use App\Models\Lokasi;
use Illuminate\Database\Eloquent\Factories\Factory;

class LokasiFactory extends Factory
{
    protected $model = Lokasi::class;
    
    private static $lokasiData = [
        'Warehouse A',
        'Warehouse B',
        'Office Storage',
        'Main Storage',
        'Supply Room',
        'IT Storage',
        'Archive Room',
        'Equipment Room',
        'Maintenance Storage',
        'Security Storage'
    ];
    
    private static $index = 0;

    public function definition()
    {
        if (self::$index >= count(self::$lokasiData)) {
            self::$index = 0;
        }
        
        return [
            'nama_lokasi' => self::$lokasiData[self::$index++],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}