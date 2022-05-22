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

        return Deck::select('id', 'user_id', 'player', 'format', 'label', 'result', 'slug', 'name', 'decklist', 'created_at', 'updated_at')
            ->with(['cards' => function($query) {
                $query->select('cards.id', 'cards.class', 'cards.talent', 'cards.type', 'cards.sub_type', 'cards.name', 'cards.identifier', 'cards.image');
            }, 'sideboard' => function($query) {
                $query->select('cards.id', 'cards.class', 'cards.talent', 'cards.type', 'cards.sub_type', 'cards.name', 'cards.identifier', 'cards.image');
            }])
            ->where('updated_at', '>', $request->get('fromDate'))
            ->where('visibility', 'public')
            ->whereExists(function($query) {
                $query->select(DB::raw(1))
                    ->from('deck_cards')
                    ->where('deck_cards.deck_id', DB::raw('decks.id'));
            })
            ->orderBy('updated_at', 'DESC')
            ->cursorPaginate(100);
    }
}
