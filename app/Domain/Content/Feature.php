<?php
namespace FabDB\Domain\Content;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use FabDB\Library\Model;
use FabDB\Library\Sluggable;

class Feature extends Model
{
    use Sluggable;

    protected $appends = [
        'isDeck',
        'isCard'
    ];

    /**
     * Get the owning featureable model.
     */
    public function featureable()
    {
        return $this->morphTo();
    }

    public function getIsDeckAttribute()
    {
        return $this->featureableType === Deck::class;
    }

    public function getIsCardAttribute()
    {
        return $this->featureableType === Card::class;
    }
}
