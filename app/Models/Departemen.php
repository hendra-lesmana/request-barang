<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\FactoryBuilder;
use Faker\Generator as Faker;

class Departemen extends Model
{
    protected $table = 'departemen';
    protected $fillable = ['nama_departemen'];

    public function karyawan()
    {
        return $this->hasMany(Karyawan::class, 'id_departemen');
    }

    public static function factory()
    {
        $faker = app(Faker::class);
        return new FactoryBuilder(static::class, [], [], [], [], $faker);
    }
}