<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BarangController;
use App\Http\Controllers\Api\RequestController;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\LocationController;

Route::middleware('api')->group(function () {
    // Request routes
    Route::get('/requests', [RequestController::class, 'index']);
    Route::post('/requests', [RequestController::class, 'store']);
    Route::get('/requests/{id}', [RequestController::class, 'show']);
    Route::put('/requests/{id}/status', [RequestController::class, 'updateStatus']);

    // Employee routes
    Route::get('/employees', [EmployeeController::class, 'index']);
    Route::get('/employees/search', [EmployeeController::class, 'search']);

    // Item routes
    Route::get('/items', [ItemController::class, 'index']);

    // Barang routes
    Route::get('/barang', [BarangController::class, 'index']);
    Route::post('/barang', [BarangController::class, 'store']);
    Route::put('/barang/{id}', [BarangController::class, 'update']);
    Route::delete('/barang/{id}', [BarangController::class, 'destroy']);

    // Location routes
    Route::get('/locations', [LocationController::class, 'index']);
    Route::post('/locations', [LocationController::class, 'store']);
    Route::put('/locations/{id}', [LocationController::class, 'update']);
    Route::delete('/locations/{id}', [LocationController::class, 'destroy']);
});
