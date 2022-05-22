<?php

use FabDB\Http\Middleware\IntranetAuth;
use Illuminate\Support\Facades\Route;

Route::middleware(IntranetAuth::class)->group(function() {
    Route::get('decks/teklo-sync', 'DeckController@tekloSync');
});
