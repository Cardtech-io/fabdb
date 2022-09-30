<?php

namespace FabDB\Http\Controllers;

use FabDB\Domain\Decks\DeckRepository;
use FabDB\Domain\Games\GameRepository;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function overallWinRate(Request $request, GameRepository $games)
    {
        return response()->json($games->overallWinRate($request->get('deck'), $request->get('user_id'), $request->get('games') ?? 100));
    }

    public function classWinRate(Request $request, GameRepository $games, DeckRepository $decks)
    {
        $deck = $decks->bySlug($request->get('deck'));

        return response()->json($games->winRateByClass(
            $deck->id,
            $request->get('games', 100),
            $request->get('user_id')
        ));
    }
}
