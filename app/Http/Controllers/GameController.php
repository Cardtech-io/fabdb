<?php

namespace FabDB\Http\Controllers;

use FabDB\Domain\Games\GameRepository;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function overallWinRate(Request $request, GameRepository $games)
    {
        return response()->json($games->overallWinRate(
            $request->deckId,
            $request->get('window', 100),
            $request->userId
        ));
    }

    public function classWinRate(Request $request, GameRepository $games)
    {
        return response()->json($games->winRateByClass(
            $request->deckId,
            $request->get('window', 100),
            $request->userId
        ));
    }

    public function heroWinRate(Request $request, GameRepository $games)
    {
        return response()->json($games->winRateByHero(
            $request->deckId,
            $request->get('window', 100),
            $request->userId
        ));
    }

    public function winRate(Request $request, GameRepository $games)
    {
        return response()->json($games->winRate(
                $request->deckId,
                $request->get('window', 100),
                $request->userId
            )
        );
    }

    public function cardStats(Request $request, GameRepository $games)
    {
        return response()->json($games->cardStats(
            $request->deckId,
            $request->get('window', 100),
            $request->userId
        ));
    }
}
