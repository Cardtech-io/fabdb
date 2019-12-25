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

Route::get('sitemap', 'SitemapController@view');

Route::middleware(['web'])->group(function() {
    Route::post('export/{deck}.pdf', 'ExportController@pdf');
    Route::get('export/{deck}.html', 'ExportController@html')->name('export.html');

    Route::middleware(['spa'])->group(function() {
        Route::get('cards', 'CardController@list');
        Route::get('cards/{card}', 'CardController@view');

        Route::post('authenticate', 'AuthController@authenticate');
        Route::post('validate', 'AuthController@validateCode');

        Route::middleware(['auth'])->group(function () {
            Route::get('collection', 'CollectionController@list');
            Route::post('collection', 'CollectionController@addCard');
            Route::delete('collection/{card}', 'CollectionController@removeCard');

            Route::get('decks/mine', 'DeckController@mine');
            Route::post('decks/{deck}', 'DeckController@addCard');
            Route::delete('decks/{deck}/{card}', 'DeckController@removeCard');
            Route::delete('decks/{deck}', 'DeckController@removeDeck');
            Route::post('decks', 'DeckController@addDeck');

            Route::put('profile', 'UserController@updateProfile');
        });

        Route::get('decks/{deck}', 'DeckController@view');

        Route::get('{anything}', function () {
            return view('welcome');
        })->where('anything', '.*');
    });
});
