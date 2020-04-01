<?php

return [
    // Support tiers
    'supporter' => [
        'deck-tester',
    ],
    'majestic' => [
        'deck-tester',
    ],
    'legendary' => [
        'deck-tester',
    ],

    // Application roles
    'editor' => [
        'deck-tester',
        'articles',
        'events',
        'drafts',
    ],

    // Store owner
    'owner' => [
        'deck-tester',
        'events',
        'drafts',
    ],

    // Event organiser
    'organiser' => [
        'events',
    ]
];
