<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        try {
            $items = Barang::with('lokasi')
                ->select('id', 'nama_barang', 'jumlah_stok', 'satuan', 'id_lokasi')
                ->get()
                ->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'nama_barang' => $item->nama_barang,
                        'jumlah_stok' => $item->jumlah_stok,
                        'satuan' => $item->satuan,
                        'lokasi' => [
                            'nama_lokasi' => $item->lokasi->nama_lokasi
                        ]
                    ];
                });

            return response()->json($items);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error fetching items',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}