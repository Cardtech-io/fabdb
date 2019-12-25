<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class MaxThreeCards implements Rule
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
        $card = $this->deck->card($value);

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