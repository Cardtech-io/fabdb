<?php

namespace FabDB\Http\Controllers;

use FabDB\Domain\Games\EloquentGameRepository;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function overallWinRate(Request $request, EloquentGameRepository $games)
    {
        return response()->json($games->overallWinRate($request->get('deck'), $request->get('user_id'), $request->get('games') ?? 100));
    }
}
