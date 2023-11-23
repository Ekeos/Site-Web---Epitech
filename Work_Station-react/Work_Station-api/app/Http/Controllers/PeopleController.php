<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\people;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    public function index()
    {
        $peoples = People::all();
        if ($peoples->count() > 0) {
            return response()->json([
                'status' => 200,
                'peoples' => $peoples
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No such records'
            ], 404);
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string|max:191',
            'lastname' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'created_at' => 'required|string|max:191',
            'phone_number' => 'required|string|max:191',
            'address' => 'required|string|max:191',
            'password' => 'required|string|max:191',
            'id_type' => 'required|exists:type,id',
            'isAdmin' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $peoples = People::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'created_at' => $request->created_at,
                'phone_number' => $request->phone_number,
                'address' => $request->address,
                'password' => $request->password,
                'id_type' => $request->id_type,
                'isAdmin' => $request->isAdmin
            ]);

            if ($peoples) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Created Successfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Error'
                ], 500);
            }
        }
    }
    public function delete($id)
    {
        $peoples = People::find($id);
        if ($peoples) {

            People::where('id', $id)->delete();
            return response()->json([
                'status' => 200,
                'message' => "Deleted successfully"
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No such type found'
            ], 404);
        }
    }

    public function show($id)
    {
        $peoples = People::find($id);

        if ($peoples) {
            return response()->json([
                'status' => 200,
                'message' => $peoples
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such type found'
            ], 404);
        }
    }

    public function edit($id)
    {
        $peoples = People::find($id);

        if ($peoples) {
            return response()->json([
                'status' => 200,
                'message' => $peoples
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such type found'
            ], 404);
        }
    }

    public function update(Request $request, int $id)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string|max:191',
            'lastname' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'password' => 'required|string',
            'phone_number' => 'required|string|max:191',
            'address' => 'required|string|max:191',
            'id_type' => 'required|integer',
            'isAdmin' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => $validator->messages()
            ], 404);
        } else {
            $peoples = People::find($id);

            if ($peoples) {

                $peoples->update([
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,
                    'email' => $request->email,
                    'password' => $request->password,
                    'phone_number' => $request->phone_number,
                    'address' => $request->address,
                    'id_type' => $request->id_type,
                    'isAdmin' => $request->isAdmin
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => 'People Updated Successfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Error'
                ], 404);
            }
        }
    }
}
