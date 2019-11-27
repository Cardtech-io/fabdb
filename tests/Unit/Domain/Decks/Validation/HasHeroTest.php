<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\HasHero;
use Tests\TestCase;

class HasHeroTest extends TestCase
{
    function test_passes_when_hero_is_present_and_card_added_is_not_a_hero()
    {
        $hero = new Card;
        $hero->keywords = ['hero'];

        $card = new Card;
        $card->keywords = ['weapon'];

        $deck = new Deck;
        $deck->setRelation('cards', collect([$hero]));

        $validator = new HasHero($deck, $card);

        $this->assertTrue($validator->passes('card', 'WTR005'));
    }

    function test_passes_when_hero_is_not_present_and_card_added_that_is_a_hero()
    {
        $weapon = new Card;
        $weapon->keywords = ['weapon'];

        $hero = new Card;
        $hero->keywords = ['hero'];

        $deck = new Deck;
        $deck->setRelation('cards', collect([$weapon]));

        $validator = new HasHero($deck, $hero);

        $this->assertTrue($validator->passes('card', 'WTR005'));
    }
}
