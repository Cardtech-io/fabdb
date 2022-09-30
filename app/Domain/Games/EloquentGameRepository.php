<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Decks\EloquentDeckRepository;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentGameRepository extends EloquentRepository implements GameRepository
{
    protected function model(): Model
    {
        return new Game;
    }

    public function saveResults(Game $game, array $cardResults)
    {
        $cards = array_map( fn($result) => new GameCard($result), $cardResults);
        $game->gameCards()->saveMany($cards);
    }

    public function overallWinRate(string $deck, ?int $userId, ?int $gameLimit = 100): array
    {
        $decks = app(EloquentDeckRepository::class);
        $deckId = $decks->bySlugWithCards($deck, false)->id;

        $games = $this->newQuery()->select('first','result')->where('deck_id', $deckId);

        if ($userId) {
            $games = $games->select('user_id')->where('user_id', $userId);
        }

        $games = $games->limit($gameLimit)->get();

        $wonFirst = $games->where('first', 1)->where('result', 1)->count();
        $lostFirst = -$games->where('first', 1)->where('result', 0)->count();
        $wonSecond = $games->where('first', 0)->where('result', 1)->count();
        $lostSecond = -$games->where('first', 0)->where('result', 0)->count();

        return [
            'first' => [$wonFirst, $lostFirst],
            'second' => [$wonSecond, $lostSecond],
            'either' => [$wonFirst + $wonSecond, $lostFirst + $lostSecond]
        ];
    }
}
