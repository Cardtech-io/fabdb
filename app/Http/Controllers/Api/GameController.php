<?php

namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Domain\Games\SaveGameResults;
use Illuminate\Http\Request;
use FabDB\Http\Controllers\Controller;

class GameController extends Controller
{
    public function results(Request $request, DeckRepository $decks, CardRepository $cards)
    {
        $deck = $decks->bySlug($request->get('deckId'));
        $opposingHero = $cards->findByIdentifier($request->get('opposingHero'));
        
        $this->dispatch(new SaveGameResults(
            'fabtcg_online',
            $request->get('gameId'),
            $deck->id,
            $opposingHero->id,
            $request->get('turns'),
            $request->get('result'),
            $request->get('cardResults')
        ));
    }
}
