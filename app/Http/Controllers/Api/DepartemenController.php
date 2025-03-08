<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Departemen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class DepartemenController extends Controller
{
    public function index()
    {
        try {
            $departments = Departemen::all();
            return response()->json([
                'status' => 'success',
                'data' => $departments
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch departments'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_departemen' => 'required|string|max:255|unique:departemen'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 422);
        }

        try {
            DB::beginTransaction();
            $department = Departemen::create([
                'nama_departemen' => $request->nama_departemen
            ]);
            DB::commit();

            return response()->json([
                'status' => 'success',
                'data' => $department
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create department'
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama_departemen' => 'required|string|max:255|unique:departemen,nama_departemen,' . $id
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 422);
        }

        try {
            DB::beginTransaction();
            $department = Departemen::findOrFail($id);
            $department->update([
                'nama_departemen' => $request->nama_departemen
            ]);
            DB::commit();

            return response()->json([
                'status' => 'success',
                'data' => $department
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update department'
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            $department = Departemen::findOrFail($id);
            $department->delete();
            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Department deleted successfully'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete department'
            ], 500);
        }
    }
}