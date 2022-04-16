<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Str;

class CardRarity implements Rule
{
    private $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
    }

    public function passes($attribute, $identifier)
    {
        $card = $this->deck->card($identifier);

        return $this->deck->format !== 'commoner' || $card->rarity->matches('C', 'R');
    }

    public function message()
    {
        return "Cards added to a commoner deck can only be either a Common or Rare card.";
    }
}
