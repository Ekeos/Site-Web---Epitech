<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use \App\Models\people;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $people = new people();
        $people->firstname = $request->firstname;
        $people->lastname = $request->lastname;
        $people->email = $request->email;
        $people->created_at = $request->created_at;
        $people->phone_number = $request->phone_number;
        $people->address = $request->address;
        $people->password = bcrypt($request->password);
        $people->id_type = $request->id_type;
        $people->save();

        return response()->json(["message" => "People created successfully", "people" => $people]);
    }

    public function login(Request $request)
    {
        $credentials = ["email" => $request->email, "password" => $request->password];

        // CHECK IF USER IS VALID IN DATABASE
        if (Auth::guard("web")->attempt($credentials)) {
            $people = Auth::user();
            return response()->json(["message" => "Logged in successfully", "people" => $people, "connect" => "true"]);
        }

        return response()->json(["message" => "Login failed", "credentials" => $credentials, "connect" => "false"]);
    }
}
