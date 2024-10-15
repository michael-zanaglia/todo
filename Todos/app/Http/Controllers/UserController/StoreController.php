<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;


class StoreController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'username' => ['required', 'max:255', 'min:3'],
                'email' => ['required', 'unique:users,email'],
                'password' => ['required', Password::min(8)->mixedCase()->letters()->numbers()->symbols()->uncompromised()],
                'checkBot' => ['required']
            ]);

            //$role = Role::where('role', 'user')->first();

            User::create([
                'name' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return response()->json(['message' => 'Inscription réussie  !'], 201);
        } catch(\Exception $e){
            //dd($e->getMessage());
            return response()->json(['errors' => $e->errors()], 422);
        }


    }
}
