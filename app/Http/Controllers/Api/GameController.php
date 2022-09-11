<?php

namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Users\UserRepository;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Http\Controllers\Controller;
use FabDB\Domain\Games\SaveGameResults;
use FabDB\Http\Requests\SaveGameRequest;

class GameController extends Controller
{
    public function results(SaveGameRequest $request, DeckRepository $decks, UserRepository $users)
    {
        $deck = $decks->bySlug($request->deck);
        $user = $request->get('user');

        if ($user) {
            $user = $users->bySlug($user);
        }

        $this->dispatch(new SaveGameResults(
            'fabtcg_online',
            $request->get('gameId'),
            $deck->id,
            $user?->id,
            $request->opposingHeroId(),
            $request->get('firstPlayer'),
            $request->get('turns'),
            $request->get('result'),
            $request->get('cardResults')
        ));
    }
}
