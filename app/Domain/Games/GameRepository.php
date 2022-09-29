<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Decks\Deck;
use FabDB\Library\Repository;

interface GameRepository extends Repository
{
    public function saveResults(Game $game, array $cardResults);

    public function overallWinRate(Deck $deck);
}
