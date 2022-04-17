<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class CardRarity implements Rule
{
    use RequiresCard;

    private $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
    }

    public function passes($attribute, $identifier)
    {
        $card = $this->getCard($identifier);

        return $this->deck->format !== 'commoner' || $card->rarity->matches('C', 'R');
    }

    public function message()
    {
        return "Cards added to a commoner deck can only be either a Common or Rare card.";
    }
}
