<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailPermintaanBarangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail_permintaan_barang', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_permintaan_barang')->constrained('permintaan_barang');
            $table->foreignId('id_barang')->constrained('barang');
            $table->string('nama_barang', 100);
            $table->foreignId('id_lokasi')->constrained('lokasi');
            $table->string('nama_lokasi', 100);
            $table->integer('kuantiti');
            $table->text('keterangan')->nullable();
            $table->enum('status', ['Terpenuhi', 'Tidak Terpenuhi'])->default('Tidak Terpenuhi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_permintaan_barang');
    }
}