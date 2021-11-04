<?php
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

/**
 * Returns the path to the versioned asset if it exists. This replaces the mix asset function as it's utterly useless
 * for cache busting on mobile devices.
 *
 * @param string $asset
 * @return string
 */
function fab_asset(string $asset): string
{
    $pathInfo = pathinfo($asset);

    return $pathInfo['dirname'].'/'.$pathInfo['filename'].'.min.'.$pathInfo['extension'];

    return !app()->environment('production') ? $asset : $pathInfo['dirname'].'/'.$pathInfo['filename'].'.min.'.$pathInfo['extension'];
}

/**
 * Returns the current version of the application that is deployed.
 *
 * @return string
 */
function fab_version(): string
{
    return trim(shell_exec('git rev-parse --short HEAD'));
}

/**
 * Compiles an array of settings to be used and passed to the front-end code.
 *
 * @return array
 */
function compile_settings(): array
{
    return [
        'apiDomain' => config('api.domain'),
        'imageDomain' => config('services.imgix.domain'),
        'game' => config('game'),
        'languages' => config('language')
    ];
}

/**
 * Compiles an array of settings to be used and passed to the front-end code.
 *
 * @return array
 */
function compile_lang(): array
{
    $except = ['pagination', 'app', 'passwords', 'validation'];
    $locale = app('translator')->getLocale();
    $disk = Storage::disk('lang');

    return collect($disk->files($locale))->mapWithKeys(function($file) use ($disk, $except) {
        $key = pathinfo($file)['filename'];

        return in_array($key, $except) ? [] : [$key => require($disk->path($file))];
    })->toArray();
}
