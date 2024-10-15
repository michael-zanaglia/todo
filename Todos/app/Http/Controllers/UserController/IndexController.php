<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class IndexController extends Controller
{
    public function login($email, $password)
    {
        $user = User::where('email',$email)->first();
        if($user){
            if(Hash::check($password, $user->password)){
                return response()->json([ 'message' => true ], 201);
            }
        }
        return response()->json([ 'errors' => true ], 422);

    }
}
