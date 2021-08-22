<?php

return [
    'sets' => [
        'bol' => [
            'id' => 'bol',
            'name' => 'Boltyn Hero Deck',
            'released' => '2021-05-07',
            'browseable' => false,
        ],
        'bvo' => [
            'id' => 'bvo',
            'name' => 'Bravo Hero Deck',
            'released' => '2019-10-11',
            'browseable' => false,
        ],
        'chn' => [
            'id' => 'chn',
            'name' => 'Chane Hero Deck',
            'released' => '2021-05-07',
            'browseable' => false,
        ],
        'ksu' => [
            'id' => 'ksu',
            'name' => 'Katsu Hero Deck',
            'released' => '2019-10-11',
            'browseable' => false,
        ],
        'lev' => [
            'id' => 'lev',
            'name' => 'Levia Hero Deck',
            'released' => '2021-05-07',
            'browseable' => false,
        ],
        'psm' => [
            'id' => 'psm',
            'name' => 'Prism Hero Deck',
            'released' => '2021-05-07',
            'browseable' => false,
        ],
        'rnr' => [
            'id' => 'rnr',
            'name' => 'Rhinar Hero Deck',
            'released' => '2019-10-11',
            'browseable' => false,
        ],
        'oxo' => [
            'id' => 'oxo'  ,
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
            'draftable' => true
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
        'u-cru' => [
            'id' => 'u-cru',
            'name' => 'Crucible of War (Unlimited)',
            'released' => '2021-07-30',
            'browseable' => false,
        ],
        'mon' => [
            'id' => 'mon',
            'name' => 'Monarch',
            'released' => '2021-05-07',
            'browseable' => true,
            'draftable' => true
        ],
        'u-mon' => [
            'id' => 'u-mon',
            'name' => 'Monarch (Unlimited)',
            'released' => '2021-05-28',
            'browseable' => false,
            'draftable' => true
        ],
        'wtr' => [
            'id' => 'wtr',
            'name' => 'Welcome to Rathe',
            'released' => '2019-10-11',
            'browseable' => true,
            'draftable' => true
        ],
        'u-wtr' => [
            'id' => 'u-wtr',
            'name' => 'Welcome to Rathe (Unlimited)',
            'released' => '2020-11-06',
            'browseable' => false,
        ]
    ],

    'classes' => [
        'generic' => 'Generic',
        'brute' => 'Brute',
        'guardian' => 'Guardian',
        'illusionist' => 'Illusionist',
        'mechanologist' => 'Mechanologist',
        'merchant' => 'Merchant',
        'ninja' => 'Ninja',
        'ranger' => 'Ranger',
        'runeblade' => 'Runeblade',
        'shapeshifter' => 'Shapeshifter',
        'warrior' => 'Warrior',
        'wizard' => 'Wizard',
    ],

    'talents' => [
        'light' => 'Light',
        'shadow' => 'Shadow',
    ],

    'types' => [
        'action',
        'attack',
        'defense',
        'equipment',
        'hero',
        'instant',
        'mentor',
        'resource',
        'token',
        'weapon',
    ],

    'sub_types' => [
        'attack',
        'arms',
        'arrow',
        'aura',
        'axe',
        'bow',
        'chest',
        'claw',
        'club',
        'dagger',
        'demon ally',
        'gem',
        'gun',
        'hammer',
        'head',
        'item',
        'landmark',
        'legs',
        'orb',
        'pistol',
        'reaction',
        'scythe',
        'staff',
        'sword',
        'young',
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

    'cards' => [
        'banned' => [
            'drone-of-brutality-red',
            'drone-of-brutality-yellow',
            'drone-of-brutality-blue',
        ],
    ],

    'decks' => [
        'labels' => [
            'casual' => 'Casual',
            'competitive' => 'Competitive',
            'janky' => 'Janky/fun',
            'meme' => 'Meme'
        ],
        'formats' => [
            'blitz' => 'Blitz',
            'constructed' => 'Constructed',
            'open' => 'Open',
        ]
    ],

    // Images when borderless get cropped to these dimensions
    'img_crop' => [25, 25, 496, 712],
];
