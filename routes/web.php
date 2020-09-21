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
    Route::get('click', 'ClickController@register');
    Route::get('export/{deck}.html', 'ExportController@html')->name('export.html');

    Route::prefix('api')->middleware(['version'])->group(function() {
        Route::get('articles', 'ArticleController@search');
        Route::get('articles/upcoming', 'ArticleController@upcoming');

        Route::get('cards', 'CardController@list');
        Route::get('cards/fabled', 'CardController@fabled');
        Route::get('cards/heroes', 'CardController@heroes');
        Route::get('cards/build', 'CardController@build');
        Route::get('cards/prices', 'CardController@prices');
        Route::get('cards/{card}', 'CardController@view');
        Route::get('packs/generate', 'CardController@generatePack');

        Route::post('export/{deck}.zip', 'ExportController@zip');
        Route::get('export/{deck}/tts-images', 'ExportController@ttsImages');
        Route::get('export/{deck}/tts-json', 'ExportController@ttsJson');

        Route::get('featured/top', 'FeatureController@top');
        Route::get('market/{card}', 'MarketController@cardTrend');

        Route::post('authenticate', 'AuthController@authenticate');
        Route::post('validate', 'AuthController@validateCode');
        Route::delete('authenticate', 'AuthController@logout');

        Route::get('events/{event}', 'EventController@view');

        Route::middleware(['auth', 'strip'])->group(function () {
            Route::get('articles/mine', 'ArticleController@mine');
            Route::put('articles/{article}', 'ArticleController@update');

            Route::post('articles', 'ArticleController@draft');

            Route::post('collection', 'CollectionController@addCard');
            Route::delete('collection/{card}', 'CollectionController@removeCard');
            Route::put('collection', 'CollectionController@updateCard');

            Route::get('events', 'EventController@list');
            Route::post('events', 'EventController@setup');
            Route::put('events/{event}', 'EventController@update');
            Route::delete('events/{event}', 'EventController@cancel');
            Route::post('events/{event}/deck', 'EventController@submitDeck');
            Route::post('events/{event}/register', 'EventController@register')->middleware('details-required:name');;
            Route::delete('events/{event}/registration', 'EventController@unregister');

            Route::get('decks/mine', 'DeckController@mine');
            Route::post('decks/copy', 'DeckController@copy');
            Route::post('decks/{deck}', 'DeckController@addCard');
            Route::put('decks/{deck}/settings', 'DeckController@saveSettings');
            Route::post('decks/{deck}/sideboard', 'DeckController@addToSideboard');
            Route::delete('decks/{deck}/sideboard/{card}', 'DeckController@removeFromSideboard');
            Route::put('decks/{deck}/{card}', 'DeckController@setCardTotal');
            Route::delete('decks/{deck}/{card}', 'DeckController@removeCard');
            Route::delete('decks/{deck}', 'DeckController@removeDeck');
            Route::post('decks', 'DeckController@addDeck');

            Route::put('profile/name', 'UserController@updateName');
            Route::put('profile', 'UserController@updateProfile');
            Route::put('profile/complete', 'UserController@completeProfile');

            Route::post('comments', 'CommentController@post')->middleware('throttle:2,1');

            Route::post('vote', 'VoteController@cast');
        });

        Route::get('articles/{article}', 'ArticleController@view');

        Route::get('comments/{type}/{foreign}', 'CommentController@list');

        Route::get('decks', 'DeckController@search');
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
