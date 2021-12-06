<?php
namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Decks\Deck;
use FabDB\Http\Resources\OscResource;
use Illuminate\Http\Request;

class DeckController extends \FabDB\Http\Controllers\DeckController
{
    public function osc(Deck $deck)
    {
        $deck->load('cards', 'cards.rulings', 'cards.printings');
        $deck->load('sideboard', 'sideboard', 'sideboard.printings');

        return new OscResource($deck);
    }

    public function tekloSync(Request $request)
    {
        return Deck::with('cards', 'sideboard')->paginate(100);
    }
}
