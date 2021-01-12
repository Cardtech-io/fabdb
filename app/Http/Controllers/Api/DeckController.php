<?php
namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Decks\Deck;
use FabDB\Http\Resources\OscResource;

class DeckController extends \FabDB\Http\Controllers\DeckController
{
    public function osc(Deck $deck)
    {
        $deck->load('cards', 'cards.rulings', 'cards.printings');
        $deck->load('sideboard', 'sideboard.cards', 'sideboard.cards.printings');

        return new OscResource($deck);
    }
}
