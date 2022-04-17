<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
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

        return $this->deck->format !== 'commoner' || $this->validCommonerRarity($card);
    }

    public function validCommonerRarity(Card $card)
    {
        return $card->rarity->matches('C') || (($card->isEquipment() || $card->isWeapon()) && $card->rarity->matches('C', 'R'));
    }

    public function message()
    {
        return "Cards added to a commoner deck can only be either a Common or Rare card.";
    }
}
