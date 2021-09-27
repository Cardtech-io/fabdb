<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Str;

class MatchesKeywords implements Rule
{
    use RequiresCard;

    /**
     * @var Deck
     */
    public $deck;

    /**
     * @var array
     */
    private $mainKeywords;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
        $this->mainKeywords = $deck->mainKeywords();
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $card = $this->getCard($value);

        return $card->isHero() || count(array_intersect($card->keywords, $this->mainKeywords)) >= 1 || $this->shapeShifting($card);
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return 'Card must contain keywords \''.implode(', ', array_slice($this->mainKeywords, 1)).'\' or \'generic\'.';
    }

    private function shapeShifting(Card $card)
    {
        $hero = $this->deck->hero;

        return $hero && $hero->class === 'shapeshifter' && Str::contains(strtolower($card->text), 'specialization');
    }
}
