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

    public function heroWinRate(Request $request, GameRepository $games, DeckRepository $decks)
    {
        $deck = $decks->bySlug($request->get('deck'));

        return response()->json($games->winRateByHero(
            $deck->id,
            $request->get('games', 100),
            $request->get('user_id')
        ));
    }

    public function winRate(Request $request, GameRepository $games, DeckRepository $decks)
    {
        $deck = $decks->bySlug($request->get('deck'));

        return response()->json($games->winRate(
                $deck->id,
                $request->get('games', 100),
                $request->get('user')
            )
        );
    }

    public function cardStats(Request $request, GameRepository $games, DeckRepository $decks)
    {
        $deck = $decks->bySlug($request->get('deck'));

        return response()->json($games->cardStats(
            $deck->id,
            $request->get('games', 100),
            $request->get('user')
        )
        );
    }
}
