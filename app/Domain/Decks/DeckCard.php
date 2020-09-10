<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Library\Model;

class DeckCard extends Model
{
    protected $table = 'deck_cards';
    protected $fillable = ['deckId', 'cardId', 'total'];

    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function deck()
    {
        return $this->belongsTo(Deck::class);
    }

    public static function add(int $deckId, int $cardId, int $total)
    {
        return static::create(compact('deckId', 'cardId', 'total'));
    }
}
