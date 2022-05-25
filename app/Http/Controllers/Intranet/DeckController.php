<?php
namespace FabDB\Http\Controllers\Intranet;

use FabDB\Domain\Decks\Deck;
use FabDB\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeckController extends Controller
{
    public function tekloSync(Request $request)
    {
        $request->validate([
            'fromDate' => 'required'
        ]);

        $query = Deck::select('id', 'user_id', 'player', 'format', 'label', 'result', 'slug', 'name', 'event', 'decklist', 'created_at', 'updated_at')
            ->with(['cards' => function($query) {
                $query->select('cards.id', 'cards.class', 'cards.talent', 'cards.type', 'cards.sub_type', 'cards.name', 'cards.identifier', 'cards.image');
            }, 'sideboard' => function($query) {
                $query->select('cards.id', 'cards.class', 'cards.talent', 'cards.type', 'cards.sub_type', 'cards.name', 'cards.identifier', 'cards.image');
            }]);

        if ($label = $request->get('label')) {
            $query->whereLabel($label);
        }

        $query->where('updated_at', '>', $request->get('fromDate'));
        $query->where('visibility', 'public');
        $query->whereExists(function($query) {
            $query->select(DB::raw(1))
                ->from('deck_cards')
                ->where('deck_cards.deck_id', DB::raw('decks.id'));
        });
        $query->orderBy('updated_at', 'ASC');

        return $query->cursorPaginate(100);
    }
}
