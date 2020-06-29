<?php

return [
    // The following are client-side routes only and should direct straight to the appropriate page
    'client' => [
        '/',
        'articles/mine',
        'articles/write',
        'articles/([^/]+)/edit',
        'articles/([^/]+)/[a-z0-9\-]+',
        'cards/draft',
        'cards/browse',
        'cards/prices',
        'collection',
        'decks/export/([^/]+)',
        'decks/build/premium/([^/]+)',
        'decks/build/([^/]+)',
        'decks/build',
        'decks/browse',
        'decks/test',
        'events',
        'login',
        'profile',
        'premium',
        'support',
    ]
];
