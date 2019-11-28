<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\MaxThreeCards;
use Tests\TestCase;
use Tests\TestsCards;

class MaxThreeCardsTest extends TestCase
{
    use TestsCards;

    function test_it_passes_when_none_of_the_required_card_have_been_added()
    {
        $card1 = $this->card('008');
        $card1->pivot_total = 3;

        $card2 = $this->card('011');
        $card2->pivot_total = 2;

        $deck = new Deck;
        $deck->setRelation('cards', collect([$card1, $card2]));

        $validator = new MaxThreeCards($deck);
        
        $this->assertTrue($validator->passes('card', 'WTR006'));
        $this->assertTrue($validator->passes('card', 'WTR011'));
        $this->assertFalse($validator->passes('card', 'WTR008'));
    }
}
