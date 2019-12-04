<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Deck extends Model
{
    use Raiseable;
    use Sluggable;

    protected $hidden = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function cards()
    {
        return $this->belongsToMany(Card::class, 'deck_cards')
            ->orderBy('cards.name')
            ->withPivot('id', 'total');
    }

    public static function add(int $userId, string $name)
    {
        $deck = new Deck;
        $deck->user_id = $userId;
        $deck->name = $name;

        $deck->raise(new DeckWasAdded($userId, $name));

        return $deck;
    }

    public function card($cardIdentifier)
    {
        $column = is_numeric($cardIdentifier) ? 'id' : 'identifier';

        return $this->cards->where($column, $cardIdentifier)->first();
    }

    public function mainKeyword()
    {
        $hero = $this->hero();

        return $hero ? $hero->keywords[0] : null;
    }

    public function hasWeapon()
    {
        return $this->cards->first(function(Card $card) {
            return $card->isWeapon();
        });
    }

    public function hero()
    {
        return $this->cards->first(function(Card $card) {
            return $card->isHero();
        });
    }

    public function weapons()
    {
        return $this->cards->filter(function(Card $card) {
            return $card->isWeapon();
        });
    }
}
