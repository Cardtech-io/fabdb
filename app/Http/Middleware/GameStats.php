<?php

namespace FabDB\Http\Middleware;

use FabDB\Domain\Decks\DeckRepository;
use Illuminate\Http\Request;

class GameStats
{
    public function __construct(private DeckRepository $decks) {}

    public function handle(Request $request, \Closure $next)
    {
        $deck = $this->decks->bySlug($request->get('deck'));

        $request->deckId = $deck->id;

        switch ($request->get('view')) {
            case 'author':
                $request->userId = $deck->userId;
                break;
            case 'me':
                $request->userId = $request->user()?->id;
                break;
            case 'community':
                break;
        }

        return $next($request);
    }
}
