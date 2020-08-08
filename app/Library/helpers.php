<?php
use Illuminate\Support\Facades\File;

/**
 * Returns the path to the versioned asset if it exists. This replaces the mix asset function as it's utterly useless
 * for cache busting on mobile devices.
 *
 * @param string $asset
 * @return string
 */
function fab_asset(string $asset): string
{
    $version = fab_version();
    $versionedAsset = preg_replace('/([a-z]+).([a-z]+)$/i', "$version.$2", $asset);

    if (File::exists(public_path($versionedAsset))) {
        return $versionedAsset;
    }

    return $asset;
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
    ];
}

/**
 * Compiles an array of settings to be used and passed to the front-end code.
 *
 * @return array
 */
function compile_lang(): array
{
    return  [
        'api' => trans('api')
    ];
}
