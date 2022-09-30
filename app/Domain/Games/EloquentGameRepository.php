<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Decks\DeckRepository;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentGameRepository extends EloquentRepository implements GameRepository
{
    public function __construct(private DeckRepository $decks) {}

    protected function model(): Model
    {
        return new Game;
    }

    public function saveResults(Game $game, array $cardResults)
    {
        $cards = array_map(fn ($result) => new GameCard($result), $cardResults);
        $game->gameCards()->saveMany($cards);
    }

    public function overallWinRate(string $deck, ?int $userId, ?int $gameLimit): array
    {
        $deckId = $this->decks->bySlugWithCards($deck, false)->id;

        $games = $this->newQuery()->select('first', 'result')->where('deck_id', $deckId);

        if ($userId) {
            $games = $games->select('user_id')->where('user_id', $userId);
        }

        $games = $games->orderBy('created_at', 'desc')->limit($gameLimit)->get();

        $allGames = $games->count();

        $wonFirst = $games->where('first', 1)->where('result', 1)->count();
        $lostFirst = $games->where('first', 1)->where('result', 0)->count();
        $wonSecond = $games->where('first', 0)->where('result', 1)->count();
        $lostSecond = $games->where('first', 0)->where('result', 0)->count();

        return [
            'won' => [number_format($wonFirst * 100 / $allGames, 2), number_format($wonSecond * 100 / $allGames, 2)],
            'lost' => [number_format($lostFirst * 100 / $allGames, 2), number_format($lostSecond * 100 / $allGames, 2)],
            'either' => [number_format($wonFirst * 100 / ($wonFirst + $lostFirst)), number_format($wonSecond * 100 / ($wonSecond + $lostSecond), 2)]
        ];
    }
}
