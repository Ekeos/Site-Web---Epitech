<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\companies;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    public function index()
    {
        $companies = Companies::all();
        if ($companies->count() > 0) {
            return response()->json([
                'status' => 200,
                'companies' => $companies
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
            'company_name' => 'required|string|max:191',
            'main_address' => 'required|string|max:191',
            'mail' => 'required|email|max:191',
            'phone_number' => 'required|string|max:191',
            'number_of_employees' => 'required|integer|digits_between:1,9999999',
            'id_sector' => 'required|exists:sector,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $companies = Companies::create([
                'company_name' => $request->company_name,
                'main_address' => $request->main_address,
                'mail'=> $request->mail,
                'phone_number' => $request->phone_number,
                'number_of_employees' => $request->number_of_employees,
                'id_sector' => $request->id_sector
            ]);

            if ($companies) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Companies Created Successfully'
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
        $companies = Companies::find($id);
        if ($companies) {

            Companies::where('id', $id)->delete();
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
        $companies = Companies::find($id);

        if ($companies) {
            return response()->json([
                'status' => 200,
                'message' => $companies
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
        $companies = Companies::find($id);

        if ($companies) {
            return response()->json([
                'status' => 200,
                'message' => $companies
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
            'company_name' => 'required|string|max:191',
            'main_address' => 'required|string|max:191',
            'mail' => 'required|email|max:191',
            'phone_number' => 'required|string|max:191',
            'number_of_employees' => 'required|integer|digits_between:1,9999999',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => $validator->messages()
            ], 404);
        } else {
            $companies = Companies::find($id);

            if ($companies) {

                $companies->update([
                    'company_name' => $request->company_name,
                    'main_address' => $request->main_address,
                    'mail' => $request->mail,
                    'phone_number' => $request->phone_number,
                    'number_of_employees' => $request->number_of_employees,
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => 'Companies Updated Successfully'
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