<?php
namespace Tests;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Identifier;
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
}
