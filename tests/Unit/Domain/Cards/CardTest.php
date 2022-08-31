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
        $card1->talent = 'shadow';

        $card2 = new Card(['text' => 'Essence of Earth, Ice, and Lightning (You may have Earth, Ice, and Lightning cards in your deck.)']);

        $this->assertContains('shadow', $card1->talents());
        $this->assertContains('ice', $card1->talents());
        $this->assertContains('lightning', $card1->talents());
        $this->assertContains('earth', $card2->talents());
        $this->assertContains('ice', $card2->talents());
        $this->assertContains('lightning', $card2->talents());
        $this->assertNotContains('shadow', $card2->talents());

    }
}
