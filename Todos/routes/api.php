<?php

use App\Http\Controllers\UserController\IndexController;
use App\Http\Controllers\UserController\StoreController;
use Illuminate\Support\Facades\Route;

Route::post('/user', [StoreController::class, 'store']);
Route::get('/user/{username}/{password}', [IndexController::class, 'login'])->name('user.login');

