<?php
namespace FabDB\Domain\Decks;

use FabDB\Providers\AppServiceProvider;

class DecksServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        DeckRepository::class => EloquentDeckRepository::class
    ];
}