<?php

namespace FabDB\Domain\Games;

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
}
