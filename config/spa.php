<?php


return [
    // The following are client-side routes only and should direct straight to welcome page
    'client' => [
        '/',
        'articles/mine',
        'articles/write',
        'articles/([^/]+)/edit',
        'articles/([^/]+)/[a-z0-9\-]+',
        'cards/draft',
        'cards/browse',
        'collection',
        'decks/build',
        'decks/test',
        'login',
        'profile',
    ]
];
