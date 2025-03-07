<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Karyawan;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Karyawan::with('departemen')
            ->get()
            ->map(function ($employee) {
                return [
                    'id' => $employee->id,
                    'NIK' => $employee->NIK,
                    'nama_karyawan' => $employee->nama_karyawan,
                    'departemen' => [
                        'id' => $employee->departemen->id,
                        'nama_departemen' => $employee->departemen->nama_departemen
                    ]
                ];
            });

        return response()->json($employees);
    }

    public function search(Request $request)
    {
        $query = $request->get('query');

        $employees = Karyawan::with('departemen')
            ->where('NIK', 'LIKE', "%{$query}%")
            ->orWhere('nama_karyawan', 'LIKE', "%{$query}%")
            ->get()
            ->map(function ($employee) {
                return [
                    'id' => $employee->id,
                    'NIK' => $employee->NIK,
                    'nama_karyawan' => $employee->nama_karyawan,
                    'departemen' => [
                        'id' => $employee->departemen->id,
                        'nama_departemen' => $employee->departemen->nama_departemen
                    ]
                ];
            });

        return response()->json($employees);
    }
}