<?php
namespace Tests\Unit\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Cards;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Decks\Deck;
use Tests\TestCase;
use Tests\TestsCards;

class DeckTest extends TestCase
{
    use TestsCards;

    function test_deck_has_specific_card()
    {
        $card1 = new Card;
        $card1->id = 1;

        $card2 = new Card;
        $card2->id = 2;

        $card3 = new Card;
        $card3->id = 3;

        $deck = new Deck;
        $deck->setRelation('cards', new Cards([$card1, $card2]));

        $this->assertNotNull($deck->card($card1->id));
        $this->assertNotNull($deck->card($card2->id));
        $this->assertNull($deck->card($card3->id));
    }

    function test_deck_has_a_weapon()
    {
        $card1 = $this->card('generic weapon', ['keywords' => ['generic', 'weapon']]);
        $card2 = $this->card('action', ['keywords' => ['action']]);

        $deck1 = new Deck;
        $deck1->setRelation('cards', new Cards([$card1]));

        $deck2 = new Deck;
        $deck2->setRelation('cards', new Cards([$card2]));

        $this->assertNotNull($deck1->hasWeapon());
        $this->assertNull($deck2->hasWeapon());
    }

    function test_hero_retrieval()
    {
        $card1 = $this->card('generic weapon', ['keywords' => ['generic', 'weapon']]);
        $card2 = $this->card('dorinthea', ['type' => 'hero', 'keywords' => ['hero', 'warrior']]);

        $deck = new Deck;
        $deck->setRelation('hero', $card2);
        $deck->setRelation('cards', new Cards([$card1, $card2]));

        $this->assertNotNull($deck->hero());
        $this->assertSame($card2->name, $deck->hero->name);
    }

    function test_main_keywords()
    {
        $hero = $this->card('generic weapon', [
            'class' => 'warrior',
            'type' => 'hero',
            'text' => '**Essence of Ice and Lightning',
            'keywords' => ['warrior', 'hero', 'young'],
        ]);

        $deck = new Deck;
        $deck->setRelation('hero', $hero);

        $this->assertContains('generic', $deck->mainKeywords());
        $this->assertContains('warrior', $deck->mainKeywords());
        $this->assertContains('ice', $deck->mainKeywords());
        $this->assertContains('lightning', $deck->mainKeywords());
    }
}
