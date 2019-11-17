<?php

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
