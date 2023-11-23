<?php

namespace App\Http\Controllers;

use App\Models\postulate;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PostulateController extends Controller
{
    public function index()
    {
        $postulates = Postulate::all();
        if ($postulates->count() > 0) {
            return response()->json([
                'status' => 200,
                'postulates' => $postulates
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
            'date' => 'required|string|max:191',
            'id_people' => 'required|exists:people,id',
            'id_ad' => 'required|exists:advertisement,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $postulates = Postulate::create([
                'date' => $request->date,
                'id_people' => $request->id_people,
                'id_ad' => $request->id_ad
            ]);

            if ($postulates) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Postulate Created Successfully'
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
        $postulates = Postulate::find($id);
        if ($postulates) {

            Postulate::where('id', $id)->delete();
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
        $postulates = Postulate::find($id);

        if ($postulates) {
            return response()->json([
                'status' => 200,
                'message' => $postulates
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
        $postulates = Postulate::find($id);

        if ($postulates) {
            return response()->json([
                'status' => 200,
                'message' => $postulates
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
            'date' => 'required|string|max:191',
            'id_people' => 'required|exists:people,id',
            'id_ad' => 'required|exists:advertisement,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $postulates = Postulate::find($id);

            if ($postulates) {

                $postulates->update([
                    'date' => $request->date,
                    'id_people' => $request->id_people,
                    'id_ad' => $request->id_ad
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => 'Postulate Updated Successfully'
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