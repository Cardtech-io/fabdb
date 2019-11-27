<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class HasHero implements Rule
{
    /**
     * @var Deck
     */
    private $deckHero;

    /**
     * @var string
     */
    private $card;

    public function __construct(Deck $deck, Card $card)
    {
        $this->deckHero = $deck->hero();
        $this->card = $card;
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
        return ($this->deckHero && !$this->card->isHero()) || (!$this->deckHero && $this->card->isHero());
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