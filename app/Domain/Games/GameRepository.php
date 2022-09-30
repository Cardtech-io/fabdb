<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\EloquentDeckRepository;
use FabDB\Library\Repository;

interface GameRepository extends Repository
{
    public function __construct(EloquentDeckRepository $decks);

    public function saveResults(Game $game, array $cardResults);

    public function overallWinRate(string $deck, ?int $userId, ?int $gameLimit);
}
