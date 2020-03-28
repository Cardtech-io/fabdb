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

    protected $appends = ['hero'];
    protected $casts = ['slug' => 'string', 'decksheet_created_at' => 'datetime'];
    protected $hidden = ['id'];
    protected $with = ['cards'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function deckCards()
    {
        return $this->hasMany(DeckCard::class);
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
        return $this->cards->hasWeapon();
    }

    public function getHeroAttribute()
    {
        return $this->cards->hero();
    }

    public function hero()
    {
        return $this->cards->hero();
    }

    public function weapons()
    {
        return $this->cards->weapons();
    }

    public function equipment()
    {
        return $this->cards->equipment()->values();
    }

    public function other($pitch = null)
    {
        return $this->cards->other($pitch)->values();
    }

    public function equipmentTotal()
    {
        return $this->equipment()->sum('total') + $this->weapons()->sum('total');
    }

    public function otherTotal()
    {
        return $this->other()->sum('total');
    }

    public function requiresNewSheet()
    {
        return empty($this->decksheet) || $this->decksheetCreatedAt->lt($this->updatedAt);
    }

    public function saveSettings(string $visibility, int $cardBack)
    {
        $this->visibility = $visibility;
        $this->cardBack = $cardBack;

        $this->raise(new DeckSettingsSaved($this->id, $visibility, $cardBack));
    }
}
