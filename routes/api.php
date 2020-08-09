<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::fallback(function() {
    return redirect(config('app.url').'/resources/api');
});

Route::get('cards', 'CardController@list');
Route::get('cards/{card}', 'CardController@view');

Route::get('decks/{deck}', 'DeckController@view');
