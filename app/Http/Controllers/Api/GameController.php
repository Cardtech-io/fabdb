<?php

namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Http\Controllers\Controller;
use FabDB\Domain\Games\SaveGameResults;
use FabDB\Http\Requests\SaveGameRequest;

class GameController extends Controller
{
    public function results(SaveGameRequest $request, DeckRepository $decks, CardRepository $cards)
    {
        $deck = $decks->bySlug($request->get('deckId'));
        
        $this->dispatch(new SaveGameResults(
            'fabtcg_online',
            $request->get('gameId'),
            $deck->id,
            $request->opposingHeroId(),
            $request->get('turns'),
            $request->get('result'),
            $request->get('cardResults')
        ));
    }
}
