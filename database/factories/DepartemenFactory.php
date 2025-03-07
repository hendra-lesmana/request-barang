<?php

namespace Database\Factories;

use App\Models\Departemen;
use Illuminate\Database\Eloquent\Factories\Factory;

class DepartemenFactory extends Factory
{
    protected $model = Departemen::class;
    
    private static $departemenData = [
        'IT Department',
        'Human Resources',
        'Finance',
        'Operations',
        'Marketing',
        'Sales',
        'Research & Development',
        'Customer Service',
        'Quality Assurance',
        'Production'
    ];
    
    private static $index = 0;

    public function definition()
    {
        if (self::$index >= count(self::$departemenData)) {
            self::$index = 0;
        }
        
        return [
            'nama_departemen' => self::$departemenData[self::$index++],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}