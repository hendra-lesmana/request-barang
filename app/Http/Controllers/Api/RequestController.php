<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PermintaanBarang;
use App\Models\DetailPermintaanBarang;
use App\Models\Karyawan;
use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RequestController extends Controller
{
    public function index()
    {
        $requests = PermintaanBarang::with(['karyawan.departemen', 'detailPermintaanBarang'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($request) {
                return [
                    'id' => $request->id,
                    'nik' => $request->karyawan->NIK,
                    'nama' => $request->karyawan->nama_karyawan,
                    'departemen' => $request->karyawan->departemen->nama_departemen,
                    'tanggal' => $request->created_at->format('Y-m-d H:i'),
                    'status' => $request->status,
                    'items' => $request->detailPermintaanBarang->map(function ($detail) {
                        return [
                            'barang' => $detail->nama_barang,
                            'lokasi' => $detail->nama_lokasi,
                            'kuantiti' => $detail->kuantiti,
                            'satuan' => $detail->barang->satuan,
                            'keterangan' => $detail->keterangan,
                            'status' => $detail->status
                        ];
                    })
                ];
            });

        return response()->json($requests);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nik' => 'required',
            'tanggal' => 'required|date',
            'items' => 'required|array|min:1',
            'items.*.barang' => 'required|exists:barang,id',
            'items.*.kuantiti' => 'required|integer|min:1'
        ]);

        try {
            DB::beginTransaction();

            $karyawan = Karyawan::where('NIK', $request->nik)->firstOrFail();

            // Validate stock availability for all items
            foreach ($request->items as $item) {
                $barang = Barang::findOrFail($item['barang']);
                if ($barang->jumlah_stok < $item['kuantiti']) {
                    throw new \Exception("Insufficient stock for item: {$barang->nama_barang}");
                }
            }

            $permintaan = PermintaanBarang::create([
                'id_karyawan' => $karyawan->id,
                'nama_permintaan_barang' => 'REQ-' . date('Ymd', strtotime($request->tanggal)) . '-' . $karyawan->NIK . '-' . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT),
                'status' => 'Pending',
                'created_at' => $request->tanggal
            ]);

            foreach ($request->items as $item) {
                $barang = Barang::with('lokasi')->findOrFail($item['barang']);

                // Create detail request
                DetailPermintaanBarang::create([
                    'id_permintaan_barang' => $permintaan->id,
                    'id_barang' => $barang->id,
                    'nama_barang' => $barang->nama_barang,
                    'id_lokasi' => $barang->lokasi->id,
                    'nama_lokasi' => $barang->lokasi->nama_lokasi,
                    'kuantiti' => $item['kuantiti'],
                    'keterangan' => $item['keterangan'] ?? null,
                    'status' => 'Terpenuhi'
                ]);

                // Reduce stock
                $barang->jumlah_stok -= $item['kuantiti'];
                $barang->save();
            }

            DB::commit();
            return response()->json(['message' => 'Request created successfully'], 201);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Error creating request', 'error' => $e->getMessage()], 500);
        }
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:Pending,Approved,Rejected',
            'notes' => 'nullable|string'
        ]);

        try {
            $permintaan = PermintaanBarang::findOrFail($id);
            $permintaan->status = $request->status;
            $permintaan->notes = $request->notes;
            $permintaan->save();

            return response()->json(['message' => 'Status updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating status', 'error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $request = PermintaanBarang::with(['karyawan.departemen', 'detailPermintaanBarang.barang'])
            ->findOrFail($id);

        $data = [
            'id' => $request->id,
            'nik' => $request->karyawan->NIK,
            'nama' => $request->karyawan->nama_karyawan,
            'departemen' => $request->karyawan->departemen->nama_departemen,
            'tanggal' => $request->created_at,
            'status' => $request->status,
            'notes' => $request->notes,
            'items' => $request->detailPermintaanBarang->map(function ($detail) {
                return [
                    'barang' => $detail->nama_barang,
                    'lokasi' => $detail->nama_lokasi,
                    'kuantiti' => $detail->kuantiti,
                    'satuan' => $detail->barang->satuan,
                    'keterangan' => $detail->keterangan,
                    'status' => $detail->status
                ];
            })
        ];

        return response()->json($data);
    }
}