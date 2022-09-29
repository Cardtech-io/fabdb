<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Decks\Deck;
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

    public function overallWinRate(Deck $deck) {
        $games = $this->model()->select('result')->where('deck_id', $deck->id)->get();

        return [
            'total_games' => count($games),
            'won' => $games->where('result', 1)->count()
        ];
    }
}
