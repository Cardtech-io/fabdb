<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */
    'adspeed' => [
        'client' => 'ca-pub-7143493109878588'
    ],

    'aws' => [
        'cloudfront' => [
            'domain' => env('CLOUDFRONT_DOMAIN'),
            'private_key_path' => env('CLOUDFRONT_PRIVATE_KEY_PATH'),
            'key_pair_id' => env('CLOUDFRONT_KEY_PAIR_ID'),
        ]
    ],

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'hotjar' => [
        'id' => env('HOTJAR_ID')
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'imgix'=> [
        'domain'=> env('IMGIX_DOMAIN')
    ]
];
