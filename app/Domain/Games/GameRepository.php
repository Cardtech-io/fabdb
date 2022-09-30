<?php

namespace FabDB\Domain\Games;

use FabDB\Library\Repository;

interface GameRepository extends Repository
{
    public function saveResults(Game $game, array $cardResults);

    public function overallWinRate(string $deck, ?int $userId, ?int $gameLimit);

    public function winRateByClass(int $deckId, int $gameLimit, ?int $userId);

    public function winRateByHero(int $deckId, int $gameLimit, ?int $userId);

    public function winRate(int $deckId, int $gameLimit, ?int $userId);

    public function cardStats(int $deckId, int $gameLimit, ?int $userId);
}
