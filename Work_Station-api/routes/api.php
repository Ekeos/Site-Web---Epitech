<?php

use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\PostulateController;
use App\Http\Controllers\Test_applyController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route Table TYPE
Route::get('type', [TypeController::class, 'index']);
Route::post('type', [TypeController::class, 'create']);
Route::get('type/{id}', [TypeController::class, 'show']);
Route::get('type/{id}/edit', [TypeController::class, 'edit']);
Route::put('type/{id}/edit', [TypeController::class, 'update']);
Route::delete('type/{id}/delete', [TypeController::class, 'delete']);

//Table SECTEUR
Route::get('sector', [SectorController::class, 'index']);
Route::post('sector', [SectorController::class, 'create']);
Route::get('sector/{id}', [SectorController::class, 'show']);
Route::get('sector/{id}/edit', [SectorController::class, 'edit']);
Route::put('sector/{id}/edit', [SectorController::class, 'update']);
Route::delete('sector/{id}/delete', [SectorController::class, 'delete']);

//Route Table COMPANIES
Route::get('companies', [CompaniesController::class, 'index']);
Route::post('companies', [CompaniesController::class, 'create']);
Route::get('companies/{id}', [CompaniesController::class, 'show']);
Route::get('companies/{id}/edit', [CompaniesController::class, 'edit']);
Route::put('companies/{id}/edit', [CompaniesController::class, 'update']);
Route::delete('companies/{id}/delete', [CompaniesController::class, 'delete']);

//Route Table PEOPLE
Route::get('people', [PeopleController::class, 'index']);
Route::post('people', [PeopleController::class, 'create']);
Route::get('people/{id}', [PeopleController::class, 'show']);
Route::get('people/{id}/edit', [PeopleController::class, 'edit']);
Route::put('people/{id}/edit', [PeopleController::class, 'update']);
Route::delete('people/{id}/delete', [PeopleController::class, 'delete']);

//Route Table ADVERTISEMENT
Route::get('advertisement', [AdvertisementController::class, 'index']);
Route::post('advertisement', [AdvertisementController::class, 'create']);
Route::get('advertisement/{id}', [AdvertisementController::class, 'show']);
Route::get('advertisement/{id}/edit', [AdvertisementController::class, 'edit']);
Route::put('advertisement/{id}/edit', [AdvertisementController::class, 'update']);
Route::delete('advertisement/{id}/delete', [AdvertisementController::class, 'delete']);

//Route Table POSTULATE
Route::get('postulate', [PostulateController::class, 'index']);
Route::post('postulate', [PostulateController::class, 'create']);
Route::get('postulate/{id}', [PostulateController::class, 'show']);
Route::get('postulate/{id}/edit', [PostulateController::class, 'edit']);
Route::put('postulate/{id}/edit', [PostulateController::class, 'update']);
Route::delete('postulate/{id}/delete', [PostulateController::class, 'delete']);


//ROUTES FOR AUTHENTIFICATION
Route::post('signup', [AuthController::class, 'signup']);
Route::post('login', [AuthController::class, 'login']);
