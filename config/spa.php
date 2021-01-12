<?php

return [
    // The following are client-side routes only and should direct straight to the appropriate page
    'client' => [
        '/',
        'articles',
        'articles/mine',
        'articles/spoilers',
        'articles/write',
        'articles/([^/]+)/edit',
        'articles/([^/]+)/[a-z0-9\-]+',
        'cards/draft',
        'cards/browse',
        'cards/fabled',
        'cards/prices',
        'cards/([^/]+)',
        'collection',
        'decks/export/([^/]+)',
        'decks/build/premium/([^/]+)',
        'decks/build/([^/]+)',
        'decks/build',
        'decks/browse',
        'decks/test',
        'decks/([^/]+)',
        'events',
        'login',
        'packs/generate',
        'profile',
        'premium',
        'resources/api',
        'support',
        'user/([^/]+)'
    ]
];
