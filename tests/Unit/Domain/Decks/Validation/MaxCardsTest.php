<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\MaxCards;
use Illuminate\Support\Facades\Request;
use Tests\TestCase;
use Tests\TestsCards;

class MaxCardsTest extends TestCase
{
    use TestsCards;

    function test_it_can_add_new_deck_cards()
    {
        $deck = new Deck;
        $deck->setRelation('cards', collect([]));
        $deck->format = 'constructed';

        $validator = new MaxCards($deck);

        $this->assertTrue($validator->passes('card', 'WTR003'));
    }

    function test_it_passes_when_none_of_the_required_cards_have_been_added()
    {
        $card1 = $this->card('WTR008', '008');
        $card1->pivot = (object) ['total' => 3];

        $card2 = $this->card('WTR011', '011');
        $card2->pivot = (object) ['total' => 2];

        $deck = new Deck;
        $deck->setRelation('cards', collect([$card1, $card2]));

        $validator = new MaxCards($deck);

        $this->assertTrue($validator->passes('card', 'WTR006'));
        $this->assertTrue($validator->passes('card', 'WTR011'));
        $this->assertFalse($validator->passes('card', 'WTR008'));
    }

    function test_it_limits_to_2_cards_for_blitz()
    {
        $card1 = $this->card('WTR008', '008');
        $card1->pivot = (object) ['total' => 2];

        $deck = new Deck;
        $deck->setRelation('cards', collect([$card1]));
        $deck->format = 'blitz';

        $validator = new MaxCards($deck);

        $this->assertFalse($validator->passes('card', 'WTR008'));
    }

    // The following test should SET the card's total
    function test_it_works_for_adding_more_than_one()
    {
        $card = $this->card('WTR001', '001');
        $card->pivot = (object) ['total' => 2];

        $deck = new Deck;
        $deck->setRelation('cards', collect([$card]));
        $deck->format = 'constructed';

        // Set total to 2
        request()->merge(['total' => 2]);

        $validator = new MaxCards($deck);

        $this->assertTrue($validator->passes('card', 'WTR001'));
    }
}
