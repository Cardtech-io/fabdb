<?php

use Illuminate\Support\Facades\Route;

Route::get('setup', 'SetupController@home');
Route::get('setup/remove', 'SetupController@remove');
Route::get('auth/callback', 'SetupController@finalise');

