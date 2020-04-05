<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class MaxCards implements Rule
{
    /**
     * @var Deck
     */
    private $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
    }

    /**
     * Implements rules based on the type of card, and how many of each type are allowed in a deck.
     *
     * @param  string $attribute
     * @param  mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        /** @var Card $card */
        $card = $this->deck->card($value);

        if (!$card) {
            return true;
        }

        if ($card->is1hWeapon()) {
            return $card->total < 2;
        }

        if ($card->isEquipment()) {
            return $card->total < 1;
        }

        return ! $card || $card->total < 3;
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return 'Max 3 unique cards per deck.';
    }
}