<?php
use FabDB\Http\Middleware\LogRequests;
use FabDB\Http\Middleware\Cors;

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

Route::middleware('api')->group(function() {
    Route::get('cards', 'CardController@list');
    Route::get('cards/first', 'CardController@first');
    Route::get('cards/{cardIdentifier}', 'CardController@view');

    Route::get('decks/{deck}', 'DeckController@view');
    Route::get('decks/{deck}/osc', 'DeckController@osc');

    Route::get('printings/{sku}', 'PrintingController@view');
});

Route::fallback(function() {
    return redirect(config('app.url').'/resources/api');
});
