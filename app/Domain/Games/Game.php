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

    public function opposingHero()
    {
        return $this->belongsTo(Card::class, 'opposing_hero_id', 'id');
    }

    public function cards()
    {
        return $this->hasManyThrough(Card::class, GameCard::class);
    }

    public function gameCards()
    {
        return $this->hasMany(GameCard::class);
    }

    public static function setup(int $deckId, $userId, int $opposingHeroId, string $source, int $gameId, int $first, int $turns)
    {
        $game = new static;
        $game->source = $source;
        $game->gameId = $gameId;
        $game->deckId = $deckId;
        $game->userId = $userId;
        $game->opposingHeroId = $opposingHeroId;
        $game->first = $first;
        $game->turns = $turns;

        return $game;
    }

    public function saveResult($result)
    {
        $this->result = $result;
    }
}
