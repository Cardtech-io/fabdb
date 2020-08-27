<?php

return [
    'sets' => [
        'arc' => [
            'id' => 'arc',
            'name' => 'Arcane Rising',
            'released' => '2020-03-27',
            'browseable' => true,
        ],
        'ira' => [
            'id' => 'ira',
            'name' => 'IRA Welcome Deck 2019',
            'released' => '2019-08-31',
            'browseable' => false,
        ],
        'cru' => [
            'id' => 'cru',
            'name' => 'Crucible of War',
            'released' => '2020-08-28',
            'browseable' => true,
        ],
        'wtr' => [
            'id' => 'wtr',
            'name' => 'Welcome to Rathe',
            'released' => '2019-10-11',
            'browseable' => true,
        ],
    ],

    'classes' => [
        'generic' => 'Generic',
        'brute' => 'Brute',
        'guardian' => 'Guardian',
        'mechanologist' => 'Mechanologist',
        'merchant' => 'Merchant',
        'ninja' => 'Ninja',
        'ranger' => 'Ranger',
        'runeblade' => 'Runeblade',
        'warrior' => 'Warrior',
        'wizard' => 'Wizard',
    ],

    'rarities' => [
        'C' => 'Common',
        'R' => 'Rare',
        'S' => 'Super rare',
        'M' => 'Majestic',
        'L' => 'Legendary',
        'F' => 'Fabled',
        'T' => 'Token',
        'P' => 'Promo'
    ],

    // Images when borderless get cropped to these dimensions
    'img_crop' => [20, 21, 409, 586],
];
