<?php

use Illuminate\Database\Seeder;
use App\Models\Departemen;
use App\Models\Karyawan;
use App\Models\Lokasi;
use App\Models\Barang;
use App\Models\PermintaanBarang;
use App\Models\DetailPermintaanBarang;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create departments
        $departments = [
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

        $departmentIds = [];
        foreach ($departments as $dept) {
            $department = Departemen::create(['nama_departemen' => $dept]);
            $departmentIds[] = $department->id;
        }

        // Create locations
        $locations = [
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

        $locationIds = [];
        foreach ($locations as $loc) {
            $location = Lokasi::create(['nama_lokasi' => $loc]);
            $locationIds[] = $location->id;
        }

        // Create employees
        $employees = [
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

        $employeeIds = [];
        foreach ($employees as $emp) {
            $employee = Karyawan::create($emp);
            $employeeIds[] = $employee->id;
        }

        // Create items
        $items = [
            ['nama_barang' => 'Laptop', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 25, 'status' => 'active'],
            ['nama_barang' => 'Printer', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 10, 'status' => 'active'],
            ['nama_barang' => 'Paper A4', 'id_lokasi' => 4, 'satuan' => 'Box', 'jumlah_stok' => 100, 'status' => 'active'],
            ['nama_barang' => 'Office Chair', 'id_lokasi' => 1, 'satuan' => 'Unit', 'jumlah_stok' => 30, 'status' => 'active'],
            ['nama_barang' => 'Desk', 'id_lokasi' => 1, 'satuan' => 'Unit', 'jumlah_stok' => 20, 'status' => 'active'],
            ['nama_barang' => 'Ink Cartridge', 'id_lokasi' => 2, 'satuan' => 'Piece', 'jumlah_stok' => 50, 'status' => 'active'],
            ['nama_barang' => 'Mouse', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 40, 'status' => 'active'],
            ['nama_barang' => 'Keyboard', 'id_lokasi' => 3, 'satuan' => 'Unit', 'jumlah_stok' => 40, 'status' => 'active'],
            ['nama_barang' => 'Monitor', 'id_lokasi' => 1, 'satuan' => 'Unit', 'jumlah_stok' => 15, 'status' => 'active'],
            ['nama_barang' => 'Stapler', 'id_lokasi' => 5, 'satuan' => 'Unit', 'jumlah_stok' => 60, 'status' => 'active'],
            ['nama_barang' => 'Headset', 'id_lokasi' => 6, 'satuan' => 'Unit', 'jumlah_stok' => 25, 'status' => 'active'],
            ['nama_barang' => 'Webcam', 'id_lokasi' => 6, 'satuan' => 'Unit', 'jumlah_stok' => 15, 'status' => 'active']
        ];

        $itemIds = [];
        foreach ($items as $item) {
            $barang = Barang::create($item);
            $itemIds[] = $barang->id;
        }

        // Create item requests
        $requests = [
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

        $requestIds = [];
        foreach ($requests as $req) {
            $request = PermintaanBarang::create($req);
            $requestIds[] = $request->id;
        }

        // Create detailed request items
        $detailRequests = [
            ['id_permintaan_barang' => 1, 'id_barang' => 1, 'nama_barang' => 'Laptop', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 2, 'keterangan' => 'For new employees', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 1, 'id_barang' => 7, 'nama_barang' => 'Mouse', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 2, 'keterangan' => 'For new employees', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 2, 'id_barang' => 2, 'nama_barang' => 'Printer', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 1, 'keterangan' => 'IT Department printer', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 2, 'id_barang' => 6, 'nama_barang' => 'Ink Cartridge', 'id_lokasi' => 2, 'nama_lokasi' => 'Warehouse B', 'kuantiti' => 5, 'keterangan' => 'Printer supplies', 'status' => 'Tidak Terpenuhi'],
            ['id_permintaan_barang' => 3, 'id_barang' => 4, 'nama_barang' => 'Office Chair', 'id_lokasi' => 1, 'nama_lokasi' => 'Warehouse A', 'kuantiti' => 3, 'keterangan' => 'New employee setup', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 3, 'id_barang' => 5, 'nama_barang' => 'Desk', 'id_lokasi' => 1, 'nama_lokasi' => 'Warehouse A', 'kuantiti' => 3, 'keterangan' => 'New employee setup', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 4, 'id_barang' => 3, 'nama_barang' => 'Paper A4', 'id_lokasi' => 4, 'nama_lokasi' => 'Main Storage', 'kuantiti' => 10, 'keterangan' => 'Monthly supply', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 5, 'id_barang' => 10, 'nama_barang' => 'Stapler', 'id_lokasi' => 5, 'nama_lokasi' => 'Supply Room', 'kuantiti' => 5, 'keterangan' => 'Office supplies', 'status' => 'Tidak Terpenuhi'],
            ['id_permintaan_barang' => 6, 'id_barang' => 11, 'nama_barang' => 'Headset', 'id_lokasi' => 6, 'nama_lokasi' => 'IT Storage', 'kuantiti' => 4, 'keterangan' => 'Marketing team equipment', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 7, 'id_barang' => 8, 'nama_barang' => 'Keyboard', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 6, 'keterangan' => 'Sales department', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 8, 'id_barang' => 1, 'nama_barang' => 'Laptop', 'id_lokasi' => 3, 'nama_lokasi' => 'Office Storage', 'kuantiti' => 3, 'keterangan' => 'R&D team laptops', 'status' => 'Tidak Terpenuhi'],
            ['id_permintaan_barang' => 9, 'id_barang' => 12, 'nama_barang' => 'Webcam', 'id_lokasi' => 6, 'nama_lokasi' => 'IT Storage', 'kuantiti' => 8, 'keterangan' => 'CS team equipment', 'status' => 'Terpenuhi'],
            ['id_permintaan_barang' => 10, 'id_barang' => 9, 'nama_barang' => 'Monitor', 'id_lokasi' => 1, 'nama_lokasi' => 'Warehouse A', 'kuantiti' => 4, 'keterangan' => 'QA testing stations', 'status' => 'Terpenuhi']
        ];

        foreach ($detailRequests as $detail) {
            DetailPermintaanBarang::create($detail);
        }
    }
}
