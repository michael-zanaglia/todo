<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;




Route::get('/', [PagesController::class, 'home']);
Route::get('/register', [PagesController::class, 'register'])->name('pages.register');
Route::get('/login', [PagesController::class, 'login'])->name('pages.login');



