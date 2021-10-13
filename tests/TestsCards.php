<?php
namespace Tests;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Cards;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Decks\Deck;
use Mockery as m;

trait TestsCards
{
    protected function mockCardRepository()
    {
        $cards = m::mock(CardRepository::class);
        $this->instance(CardRepository::class, $cards);

        return $cards;
    }

    protected function card(string $name, array $params = [])
    {
        $params = array_merge(['keywords' => []], $params);

        $card = new Card;
        $card->identifier = Identifier::fromName($name);

        foreach ($params as $field => $value) {
            $card->$field = $value;
        }

        return  $card;
    }

    protected function fillDeck(Deck $deck, int $howMany)
    {
        $cards = [];

        for ($i = 0; $i < $howMany; $i++) {
            $card = $this->card($i);

            $card->pivot = (object) ['total' => 1];

            $cards[] = $card;
        }

        $deck->setRelation('cards', new Cards($cards));
    }
}
