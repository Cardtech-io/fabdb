<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class AvailableToSideboard implements Rule
{
    use RequiresCard;

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
        $sideboard = $this->deck->sideboardCard($card->id);

        return !$sideboard || $sideboard->total < $card->total;
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return "You can only sideboard as many of a unique card as you have added to your deck.";
    }
}