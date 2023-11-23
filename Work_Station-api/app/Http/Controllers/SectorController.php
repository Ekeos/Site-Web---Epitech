<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\sector;
use Illuminate\Support\Facades\Validator;


class SectorController extends Controller
{
    public function index()
    {
        $sectors = Sector::all();
        if ($sectors->count() > 0) {
            return response()->json([
                'status' => 200,
                'sectors' => $sectors
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
            'libelle' => 'required|string|max:191'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 421,
                'message' => $validator->messages()
            ], 421);
        } else {
            $sector = Sector::create([
                'libelle' => $request->libelle
            ]);

            if ($sector) {
                return response()->json([
                    'status' => 200,
                    'message' => 'sector Created Successfully'
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
        $sector = Sector::find($id);
        if ($sector) {

            Sector::where('id', $id)->delete();
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
        $sector = Sector::find($id);

        if ($sector) {
            return response()->json([
                'status' => 200,
                'message' => $sector
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
        $sector = Sector::find($id);

        if ($sector) {
            return response()->json([
                'status' => 200,
                'message' => $sector
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
            'libelle' => 'required|string|max:191'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $sector = Sector::find($id);

            if ($sector) {

                $sector->update([
                    'libelle' => $request->libelle
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => 'Sector Updated Successfully'
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
