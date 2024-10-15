<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
        //return view('info');
    }

    public function register()
    {
        return Inertia::render('Register');
    }

    public function login()
    {
        return Inertia::render('Login');
    }
}
