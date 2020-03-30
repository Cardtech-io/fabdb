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

use Illuminate\Http\Request;

Route::get('sitemap', 'SitemapController@view');

Route::middleware(['web'])->group(function() {
    Route::post('export/{deck}.pdf', 'ExportController@pdf');
    Route::get('export/{deck}.html', 'ExportController@html')->name('export.html');
    Route::get('export/{deck}/tts-images', 'ExportController@ttsImages');
    Route::get('export/{deck}/tts-json', 'ExportController@ttsJson');

    Route::middleware(['spa'])->group(function() {
        Route::get('articles', 'ArticleController@search');

        Route::get('cards', 'CardController@list');
        Route::get('cards/{card}', 'CardController@view');
        Route::get('packs/generate', 'CardController@generatePack');

        Route::get('featured/top', 'FeatureController@top');

        Route::post('authenticate', 'AuthController@authenticate');
        Route::post('validate', 'AuthController@validateCode');
        Route::delete('authenticate', 'AuthController@logout');

        Route::middleware(['auth', 'strip'])->group(function () {
            Route::get('articles/mine', 'ArticleController@mine');
            Route::put('articles/{article}', 'ArticleController@update');

            Route::post('articles', 'ArticleController@draft');

            Route::post('collection', 'CollectionController@addCard');
            Route::delete('collection/{card}', 'CollectionController@removeCard');

            Route::get('events', 'EventController@list');
            Route::post('events', 'EventController@setup');
            Route::get('events/{event}', 'EventController@view');
            Route::put('events/{event}', 'EventController@update');
            Route::delete('events/{event}', 'EventController@cancel');
            Route::post('events/{event}/register', 'EventController@registerParticipant');
            Route::delete('events/{event}/unregister', 'EventController@unregisterParticipant');

            Route::get('decks/mine', 'DeckController@mine');
            Route::post('decks/{deck}', 'DeckController@addCard');
            Route::put('decks/{deck}/settings', 'DeckController@saveSettings');
            Route::delete('decks/{deck}/{card}', 'DeckController@removeCard');
            Route::delete('decks/{deck}', 'DeckController@removeDeck');
            Route::post('decks', 'DeckController@addDeck');

            Route::put('profile/name', 'UserController@updateName');
            Route::put('profile', 'UserController@updateProfile');

            Route::post('comments', 'CommentController@post')->middleware('throttle:2,1');
        });

        Route::get('articles/{article}', 'ArticleController@view');

        Route::get('comments/{type}/{foreign}', 'CommentController@list');

        Route::get('decks/{deck}', 'DeckController@view');
    });

    // This is our 404 route. We only want to support routes that actually have a client-facing path.
    Route::fallback(function(Request $request) {
        function pathMatches(string $path) {
            foreach (config('spa.client') as $pattern) {
                $pattern = str_replace('/', '\/', $pattern);

                if (preg_match("/^{$pattern}/i", $path)) {
                    return true;
                }
            }

            return false;
        }

        if (!$request->wantsJson() && pathMatches($request->path())) {
            return response()->view('welcome');
        }

        abort(404);
    });
});
