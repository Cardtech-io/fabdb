<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Str;

class MaxCards implements Rule
{
    /**
     * @var Deck
     */
    private $deck;

    /**
     * @var Card
     */
    private $card;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
    }

    /**
     * Implements rules based on the type of card, and how many of each type are allowed in a deck.
     *
     * @param  string $attribute
     * @param  string $identifier
     * @return bool
     */
    public function passes($attribute, $identifier)
    {
        $this->card = $this->deck->card($identifier);

        if (!$this->card) {
            return true;
        }

        // If the number of cards is specified, then we use that as the value
        if (request()->has('total')) {
            return request()->get('total') < $this->maxNumber();
        }

        // Else, add 1.
        return $this->card->pivot->total + 1 <= $this->maxNumber();
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        $max = $this->maxNumber();

        return "Max $max unique ".Str::plural('card', $max)." per deck.";
    }

    private function maxNumber()
    {
        if ($this->card->isEquipment()) {
            return 1;
        }

        if ($this->deck->format == 'blitz') {
            return 2;
        }

        return 3;
    }
}
