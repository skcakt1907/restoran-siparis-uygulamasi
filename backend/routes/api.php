<?php

use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\HomepageController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\ReservationController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SettingController;
use App\Http\Controllers\Api\TestimonialController;
use Illuminate\Support\Facades\Route;

Route::get('/homepage',         [HomepageController::class,    'index']);

Route::get('/menu',             [MenuController::class,        'index']);
Route::get('/menu/{menuItem}',  [MenuController::class,        'show']);

Route::get('/categories',           [CategoryController::class, 'index']);
Route::get('/categories/{slug}',    [CategoryController::class, 'show']);

Route::get('/services',          [ServiceController::class,     'index']);
Route::get('/services/{slug}',   [ServiceController::class,     'show']);

Route::get('/testimonials',      [TestimonialController::class, 'index']);

Route::get('/blog',              [BlogController::class,        'index']);
Route::get('/blog/{slug}',       [BlogController::class,        'show']);

Route::get('/settings',          [SettingController::class,     'index']);

Route::post('/contact',          [ContactController::class,     'store']);
Route::post('/reservation',      [ReservationController::class, 'store']);

Route::get('/health', fn () => response()->json([
    'status' => 'ok', 'service' => 'OCAK Restoran API', 'time' => now()->toIso8601String(),
]));
