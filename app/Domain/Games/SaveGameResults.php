<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Cards\CardRepository;

class SaveGameResults
{
    public function __construct(
        private string $source,
        private int $gameId, 
        private int $deckId, 
        private int $opposingHeroId, 
        private int $gameLength, 
        private string $result, 
        private array $results
    ) {}
    
    public function handle(GameRepository $games, CardRepository $cards)
    {
        $cardIds = $cards->getAllIdsByIdentifiers($this->cardIdentifiers());

        // Map all card results to actual ids in our system
        $cardResults = $this->mapCardIds($cardIds);

        // Now we setup and save the game's result
        $games->transaction(function() use ($games, $cardResults) {
            $game = Game::setup($this->deckId, $this->opposingHeroId, $this->source, $this->results['gameId']);
            $games->save($game);
            $game->saveResult($this->result);
            $games->saveResults($game, $cardResults);
        });
    }

    private function cardIdentifiers(): array
    {
        return array_map(function($result) {
            return $result['cardId'];
        }, $this->results['cardResults']);
    }

    private function mapCardIds(array $cardIds): array
    {
        return array_map(function($result) use ($cardIds) {
            $result['cardId'] = array_search($result['cardId'], $cardIds);
            return $result;
        }, $this->results['cardResults']);
    }
}
