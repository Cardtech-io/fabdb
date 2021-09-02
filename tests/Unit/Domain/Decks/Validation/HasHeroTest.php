<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Cards;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\HasHero;
use Tests\TestCase;
use Tests\TestsCards;

class HasHeroTest extends TestCase
{
    use TestsCards;

    private $cards;

    function init()
    {
        $this->cards = $this->mockCardRepository();
    }

    function test_passes_when_hero_is_present_and_card_added_is_not_a_hero()
    {
        $hero = $this->card('hero', ['type' => 'hero']);
        $card = $this->card('hero', ['type' => 'weapon']);

        $deck = new Deck;
        $deck->setRelation('cards', new Cards([$hero]));

        $validator = new HasHero($deck);

        $this->cards->shouldReceive('findByIdentifier')->andReturn($card);

        $this->assertTrue($validator->passes('card', 'WTR005'));
    }

    function test_passes_when_hero_is_not_present_and_card_added_that_is_a_hero()
    {
        $hero = $this->card('hero', ['type' => 'hero']);
        $weapon = $this->card('hero', ['type' => 'weapon']);

        $deck = new Deck;
        $deck->setRelation('cards', new Cards([$weapon]));

        $validator = new HasHero($deck);

        $this->cards->shouldReceive('findByIdentifier')->andReturn($hero);

        $this->assertTrue($validator->passes('card', 'WTR005'));
    }
}
