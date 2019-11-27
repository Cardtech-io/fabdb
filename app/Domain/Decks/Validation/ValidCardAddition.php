<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class ValidCardAddition implements Rule
{
    /**
     * @var Deck
     */
    private $deck;

    /**
     * @var string
     */
    private $card;

    public function __construct(Deck $deck, Card $card)
    {
        $this->deck = $deck;
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

    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {

    }
}
