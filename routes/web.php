<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('cards', 'CardController@list');
Route::get('cards/{card}', 'CardController@view');

Route::post('authenticate', 'AuthController@authenticate');
Route::post('validate', 'AuthController@validateCode');

Route::middleware(['auth'])->group(function(){
    Route::post('collection', 'CollectionController@addCard');
    Route::delete('collection/{card}', 'CollectionController@removeCard');
});

Route::get('{anything}', function() {
    return view('welcome');
})->where('anything', '.*');
