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

    protected function card(string $name, array $keywords = [])
    {
        $card = new Card;
        $card->identifier = new Identifier('WTR', $name);
        $card->name = $name;
        $card->keywords = $keywords;

        return  $card;
    }
}
