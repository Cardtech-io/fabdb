<?php
namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Decks\Deck;

class DeckController extends \FabDB\Http\Controllers\DeckController
{
    public function view(Deck $deck)
    {
        return parent::view($deck);
    }
}
