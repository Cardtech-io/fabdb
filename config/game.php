<?php

return [
    'sets' => [
        'bvo' => [
            'id' => 'bvo',
            'name' => 'Bravo Hero Deck',
            'released' => '2019-10-11',
            'browseable' => false,
        ],
        'ksu' => [
            'id' => 'ksu',
            'name' => 'Katsu Hero Deck',
            'released' => '2019-10-11',
            'browseable' => false,
        ],
        'rnr' => [
            'id' => 'rnr',
            'name' => 'Rhinar Hero Deck',
            'released' => '2019-10-11',
            'browseable' => false,
        ],
        'oxo' => [
            'id' => 'oxo',
            'name' => 'Slingshot Underground',
            'released' => '2018-12-01',
            'browseable' => false,
        ],
        'tea' => [
            'id' => 'tea',
            'name' => 'Dorinthea Hero Deck',
            'released' => '2019-10-11',
            'browseable' => false,
        ],
        'fab' => [
            'id' => 'fab',
            'name' => 'Flesh & Blood Promos',
            'released' => null,
            'browseable => false'
        ],
        'her' => [
            'id' => 'her',
            'name' => 'Hero Promos',
            'released' => null,
            'browseable => false'
        ],
        'lgs' => [
            'id' => 'lgs',
            'name' => 'Local Game Store Promos',
            'released' => null,
            'browseable => false'
        ],
        'lss' => [
            'id' => 'lss',
            'name' => 'Legend Story Studios Promos',
            'released' => null,
            'browseable => false'
        ],
        'arc' => [
            'id' => 'arc',
            'name' => 'Arcane Rising',
            'released' => '2020-03-27',
            'browseable' => true,
        ],
        'u-arc' => [
            'id' => 'u-arc',
            'name' => 'Arcane Rising (Unlimited)',
            'released' => '2020-11-20',
            'browseable' => false,
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
        'u-wtr' => [
            'id' => 'u-wtr',
            'name' => 'Welcome to Rathe (Unlimited)',
            'released' => '2020-11-06',
            'browseable' => false,
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
    'img_crop' => [25, 25, 496, 712],
];
