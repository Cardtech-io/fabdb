<?php
namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Decks\Deck;
use FabDB\Http\Resources\OscResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $query = Deck::select('id', 'slug', 'name', 'format', 'label')
            ->with(['cards' => function($query) {
                $query->select(DB::raw('cards.id AS card_id'), 'name', 'image', 'class', 'talent', 'type', 'sub_type');
            }, 'sideboard' => function($query) {
                $query->select(DB::raw('cards.id AS card_id'));
            }]);

        if ($request->has('from')) {
            $query->where('decks.updated_at', '>=', $request->get('from'));
        }

        return $query->simplePaginate(500);
    }
}
