<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\SecteurController;
use App\Http\Controllers\PostulateController;
use App\Http\Controllers\FavoriteController;
use App\Models\Advertisement;
use App\Models\people;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', [UserController::class, 'index']);

Route::get('/', function() {
    $people = People::all();
    return view('welcome', ["type" => $people]);
});

Route::get('/advertisement', [AdvertisementController::class, 'index']);
Route::get('/people', [PeopleController::class, 'index']); 
Route::get('/companies', [CompaniesController::class, 'index']); 
Route::get('/type', [TypeController::class, 'index']); 
Route::get('/secteur', [SecteurController::class, 'index']); 
Route::get('/postulate', [PostulateController::class, 'index']); 
Route::get('/favorite', [FavoriteController::class, 'index']); 