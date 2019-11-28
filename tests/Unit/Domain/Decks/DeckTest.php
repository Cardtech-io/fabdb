<?php
namespace Tests\Unit\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Decks\Deck;
use Tests\TestCase;

class DeckTest extends TestCase
{
    function test_deck_has_specific_card()
    {
        $card1 = new Card;
        $card1->id = 1;

        $card2 = new Card;
        $card2->id = 2;

        $card3 = new Card;
        $card3->id = 3;

        $deck = new Deck;
        $deck->setRelation('cards', collect([$card1, $card2]));

        $this->assertNotNull($deck->card($card1->id));
        $this->assertNotNull($deck->card($card2->id));
        $this->assertNull($deck->card($card3->id));
    }

    function test_deck_has_a_weapon()
    {
        $card1 = new Card;
        $card1->keywords = ['generic', 'weapon'];

        $card2 = new Card;
        $card2->keywords = ['action'];

        $deck1 = new Deck;
        $deck1->setRelation('cards', collect([$card1]));

        $deck2 = new Deck;
        $deck2->setRelation('cards', collect([$card2]));

        $this->assertNotNull($deck1->hasWeapon());
        $this->assertNull($deck2->hasWeapon());
    }

    function test_hero_retrieval()
    {
        $card1 = new Card;
        $card1->keywords = ['generic', 'weapon'];

        $card2 = new Card;
        $card2->name = 'Dorinthea';
        $card2->keywords = ['hero', 'warrior'];

        $deck = new Deck;
        $deck->setRelation('cards', collect([$card1, $card2]));

        $this->assertNotNull($deck->hero());
        $this->assertSame($card2->name, $deck->hero()->name);
    }
}
