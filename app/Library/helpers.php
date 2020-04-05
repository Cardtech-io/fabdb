<?php
use Illuminate\Support\Facades\File;

/**
 * Returns a signed URL for a cloudfront asset/object.
 *
 * @param string $object
 * @param int $expires
 * @return string
 */
function cloudfront_url(string $object, int $expires = 3600): string
{
    $client = new Aws\CloudFront\CloudFrontClient([
        'profile' => 'default',
        'version' => '2014-11-06',
        'region' => 'us-east-2'
    ]);

    return $client->getSignedUrl([
        'url' => 'https://'.config('services.aws.cloudfront.domain').'/'.$object,
        'expires' => $expires,
        'private_key' => config('services.aws.cloudfront.private_key_path'),
        'key_pair_id' => config('services.aws.cloudfront.key_pair_id')
    ]);
}

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
    $settings = [
        'imageDomain' => config('services.imgix.domain')
    ];

    return $settings;
}
