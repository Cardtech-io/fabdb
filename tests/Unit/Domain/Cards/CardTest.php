<?php
namespace Tests\Unit\Domain\Cards;

use FabDB\Domain\Cards\Card;
use Tests\TestCase;

class CardTest extends TestCase
{
    function test_a_generic_card_returns_true()
    {
        $card1 = new Card(['keywords' => ['generic']]);
        $card2 = new Card(['keywords' => ['light']]);
        $card3 = new Card(['keywords' => ['brute']]);
        $card4 = new Card(['keywords' => ['shadow', 'runeblade']]);
        $card5 = new Card(['keywords' => ['shadow']]);

        $this->assertTrue($card1->isGeneric());
        $this->assertTrue($card2->isGeneric());
        $this->assertFalse($card3->isGeneric());
        $this->assertFalse($card4->isGeneric());
        $this->assertTrue($card5->isGeneric());
    }

    function test_talents_returns_registered_talents_and_inferred()
    {
        $card1 = new Card(['text' => '**Essence of Ice and Lightning (']);
        $card1->talents = ['elemental'];

        $card2 = new Card(['text' => 'Essence of Earth, Ice, and Lightning (You may have Earth, Ice, and Lightning cards in your deck.)']);

        $this->assertContains('elemental', $card1->talents);
        $this->assertContains('ice', $card1->essences());
        $this->assertContains('lightning', $card1->essences());
        $this->assertContains('earth', $card2->essences());
        $this->assertContains('ice', $card2->essences());
        $this->assertContains('lightning', $card2->essences());
        $this->assertNotContains('elemental', $card2->essences());

        $this->assertContains('elemental', $card1->utilisesTalents());
        $this->assertContains('ice', $card1->utilisesTalents());
        $this->assertContains('lightning', $card1->utilisesTalents());
    }

    function test_a_card_can_be_multiclass()
    {
        $card = new Card(['classes' => ['warrior', 'wizard']]);

        $this->assertContains('warrior', $card->classes);
        $this->assertContains('wizard', $card->classes);
    }

    function test_a_card_has_a_pitch_value()
    {
        $card1 = new Card(['stats' => ['resource' => 3]]);
        $card2 = new Card(['stats' => ['resource' => 0]]);
        $card3 = new Card();

        $this->assertTrue($card1->resourceful());
        $this->assertFalse($card2->resourceful());
        $this->assertFalse($card3->resourceful());
    }

    function test_setting_card_name_removes_colour_text()
    {
        $card1 = new Card(['name' => 'Razor Reflex (Red)']);
        $card2 = new Card(['name' => 'Glint the Quicksilver']);

        $this->assertSame('Razor Reflex', $card1->name);
        $this->assertSame('Glint the Quicksilver', $card2->name);
    }

    function test_returns_true_when_card_is_a_hero()
    {
        $card1 = new Card(['type' => 'hero']);
        $card2 = new Card(['type' => 'weapon']);

        $this->assertTrue($card1->isHero());
        $this->assertFalse($card2->isHero());
        $this->assertTrue($card2->isWeapon());
    }

    function test_return_true_when_card_is_talented()
    {
        $card1 = new Card(['talents' => ['draconic']]);
        $card2 = new Card(['talents' => []]);
        $card3 = new Card(['text' => 'Essence of Earth, Ice and Lightning...']);

        $this->assertTrue($card1->isTalented());
        $this->assertFalse($card2->isTalented());
        $this->assertTrue($card3->isTalented());
    }
}
