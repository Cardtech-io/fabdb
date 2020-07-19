<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class MaxTotalCards implements Rule
{
    use RequiresCard;

    /**
     * @var Card
     */
    private $card;

    /**
     * @var Deck
     */
    private $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
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
        $this->card = $this->getCard($value);

        return $this->deck->cards->deckTotal() < $this->maxCards();
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        $max = $this->maxCards();

        return "You cannot have more than $max cards in your deck.";
    }

    private function maxCards()
    {
        switch (true) {
            case $this->deck->format == 'blitz' && $this->card->isEquipment():
                return 11;
            case $this->deck->format == 'blitz' && !$this->card->isEquipment():
                return 40;
            default:
                return 80;
        }
    }
}
