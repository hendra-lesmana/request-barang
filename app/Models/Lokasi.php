<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\FactoryBuilder;
use Faker\Generator as Faker;

class Lokasi extends Model
{
    protected $table = 'lokasi';
    protected $fillable = ['nama_lokasi'];

    public function barang()
    {
        return $this->hasMany(Barang::class, 'id_lokasi');
    }

    public function detailPermintaanBarang()
    {
        return $this->hasMany(DetailPermintaanBarang::class, 'id_lokasi');
    }

    public static function factory()
    {
        $faker = app(Faker::class);
        return new FactoryBuilder(static::class, [], [], [], [], $faker);
    }
}