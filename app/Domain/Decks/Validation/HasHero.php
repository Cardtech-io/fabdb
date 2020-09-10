<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class HasHero implements Rule
{
    use RequiresCard;

    /**
     * @var Deck
     */
    private $deckHero;

    public function __construct(Deck $deck)
    {
        $this->deckHero = $deck->hero();
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

        return ($this->deckHero && !$card->isHero()) || (!$this->deckHero && $card->isHero());
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return $this->deckHero ? 'Your deck already has a hero.' : 'You must first select a hero for your deck.';
    }
}
