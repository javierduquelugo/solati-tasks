<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\TasksController;

// Route::get('/auth', [TasksController::class, 'getAll']);

Route::controller(TasksController::class)->group(function () {
    Route::get('/tasks', 'index');
    Route::get('/tasks/{id}', 'show');
    Route::post('/tasks', 'store');
    Route::put('/tasks/{id}', 'update');
    Route::delete('/tasks/{id}', 'destroy');
});

// Route::apiResource('tasks', TasksController::class);

// Route::post('/tasks', [TasksController::class, 'newTask'])->middleware('auth:sanctum');