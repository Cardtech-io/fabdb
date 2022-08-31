<?php

namespace FabDB\Domain\Games;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use FabDB\Library\Model;

final class Game extends Model
{
    public function deck()
    {
        return $this->belongsTo(Deck::class);
    }

    public function cards()
    {
        return $this->hasManyThrough(Card::class, GameCard::class);
    }

    public function gameCards()
    {
        return $this->hasMany(GameCard::class);
    }

    public static function setup(int $deckId, int $opposingHero, string $source, int $gameId)
    {
        $game = new static;
        $game->source = $source;
        $game->gameId = $gameId;
        $game->deckId = $deckId;
        $game->opposingHero = $opposingHero;
        
        return $game;
    }

    public function saveResult(int $result)
    {
        $this->result = $result;
    }
}
