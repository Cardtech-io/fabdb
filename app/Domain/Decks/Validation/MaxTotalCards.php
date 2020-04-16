<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class MaxTotalCards implements Rule
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
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $this->deck->cards->total() < 80;
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return "You cannot have more than 80 cards per deck.";
    }
}