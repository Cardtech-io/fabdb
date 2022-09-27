<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Cards\CardRepository;

class SaveGameResults
{
    public function __construct(
        private string $source,
        private int $gameId,
        private int $deckId,
        private $userId,
        private int $opposingHeroId,
        private int $first,
        private int $turns,
        private $result,
        private array $results
    ) {}

    public function handle(GameRepository $games, CardRepository $cards)
    {
        $cardIds = $cards->getAllIdsByCardNumbers($this->cardNumbers());

        // Map all card results to actual ids in our system
        $cardResults = $this->mapCardIds($cardIds);

        // Now we setup and save the game's result
        $games->transaction(function() use ($games, $cardResults) {
            $game = Game::setup($this->deckId, $this->userId, $this->opposingHeroId, $this->source, $this->gameId, $this->first, $this->turns);
            $game->saveResult($this->result);
            $games->save($game);
            $games->saveResults($game, $cardResults);
        });
    }

    private function cardNumbers(): array
    {
        return array_map(function($result) {
            return $result['cardId'];
        }, $this->results);
    }

    private function mapCardIds(array $cardIds): array
    {
        return array_map(function($result) use ($cardIds) {
            $result['cardId'] = $cardIds[$result['cardId']];
            return $result;
        }, $this->results);
    }
}
