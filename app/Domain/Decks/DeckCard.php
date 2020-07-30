<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Library\Model;

class DeckCard extends Model
{
    protected $table = 'deck_cards';

    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function deck()
    {
        return $this->belongsTo(Deck::class);
    }
}
