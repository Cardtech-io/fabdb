<?php
namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Decks\Deck;
use FabDB\Http\Resources\DeckResource;

class DeckController extends \FabDB\Http\Controllers\DeckController
{
    public function view(Deck $deck)
    {
        $deck->load('cards', 'cards.printings');
        $deck->load('sideboard');

        return new DeckResource($deck);
    }
}
