<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\Advertisement;
use Illuminate\Http\Request;

class AdvertisementController extends Controller
{
    public function index()
    {

        $advertisements = Advertisement::all();
        if ($advertisements->count() > 0) {
            return response()->json([
                'status' => 200,
                'advertisements' => $advertisements
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
            'title' => 'required|string|max:191',
            'description' => 'required|string',
            'address' => 'required|string|max:191',
            'wages' => 'required|integer|digits_between:0,9999999',
            'schedule' => 'required|string|max:191',
            'id_company' => 'required|exists:companies,id',
            'id_sector' => 'required|exists:sector,id',
            'id_type' => 'required|exists:type,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $advertisements = Advertisement::create([
                'title' => $request->title,
                'description' => $request->description,
                'address' => $request->address,
                'wages' => $request->wages,
                'schedule' => $request->schedule,
                'id_company' => $request->id_company,
                'id_sector' => $request->id_sector,
                'id_type' => $request->id_type
            ]);

            if ($advertisements) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Advertisement Created Successfully'
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
        $advertisements = Advertisement::find($id);
        if ($advertisements) {

            Advertisement::where('id', $id)->delete();
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
        $advertisements = Advertisement::find($id);

        if ($advertisements) {
            return response()->json([
                'status' => 200,
                'message' => $advertisements
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
        $advertisements = Advertisement::find($id);

        if ($advertisements) {
            return response()->json([
                'status' => 200,
                'message' => $advertisements
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
            'title' => 'required|string|max:191',
            'description' => 'required|string',
            'address' => 'required|string|max:191',
            'wages' => 'required|integer|digits_between:0,9999999',
            'schedule' => 'required|string|max:191',
            'id_company' => 'required|exists:companies,id',
            'id_sector' => 'required|exists:sector,id',
            'id_type' => 'required|exists:type,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => $validator->messages()
            ], 404);
        } else {
            $advertisements = Advertisement::find($id);

            if ($advertisements) {

                $advertisements->update([
                    'title' => $request->title,
                    'description' => $request->description,
                    'address' => $request->address,
                    'wages' => $request->wages,
                    'schedule' => $request->schedule,
                    'id_company' => $request->id_company,
                    'id_sector' => $request->id_sector,
                    'id_type' => $request->id_type
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => 'Advertisement Updated Successfully'
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