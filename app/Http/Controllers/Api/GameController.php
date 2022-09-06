<?php

namespace FabDB\Http\Controllers\Api;

use Illuminate\Support\Arr;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Http\Controllers\Controller;
use FabDB\Domain\Games\SaveGameResults;
use FabDB\Http\Requests\SaveGameRequest;

class GameController extends Controller
{
    public function results(SaveGameRequest $request, DeckRepository $decks, CardRepository $cards)
    {
        $json = json_decode($request->getContent(), true);
        $deck = $decks->bySlug(Arr::get($json,'deckId'));
        
        $this->dispatch(new SaveGameResults(
            'fabtcg_online',
            Arr::get($json, 'gameId'),
            $deck->id,
            $request->opposingHeroId(),
            Arr::get($json, 'turns'),
            Arr::get($json, 'result'),
            Arr::get($json, 'cardResults')
        ));
    }
}
