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
}
