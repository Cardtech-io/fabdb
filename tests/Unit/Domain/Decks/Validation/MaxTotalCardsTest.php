<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Cards\Cards;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\MaxTotalCards;
use Tests\TestCase;
use Tests\TestsCards;

class MaxTotalCardsTest extends TestCase
{
    use TestsCards;

    private $cards;

    function init()
    {
        $this->cards = $this->mockCardRepository();
    }

    function test_cards_can_be_added_when_not_at_max()
    {
        $deck = new Deck;
        $deck->setRelation('cards', new Cards);
        $deck->format = 'blitz';

        $validator = new MaxTotalCards($deck);

        $card = $this->card('razor reflex');

        $this->cards->shouldReceive('findByIdentifier')->with('razor-reflex-red')->andReturn($card);

        $this->assertTrue($validator->passes('card', 'razor-reflex-red'));
    }

    function test_card_cannot_be_added_when_at_max()
    {
        $deck = new Deck;
        $deck->setRelation('cards', new Cards);
        $deck->format = 'blitz';

        $this->fillDeck($deck, 11);

        $card = $this->card('armour', ['type' => 'equipment', 'keywords' => ['equipment']]);
        $this->cards->shouldReceive('findByIdentifier')->with('armour')->andReturn($card);

        $validator = new MaxTotalCards($deck);

        $this->assertFalse($validator->passes('card', 'armour'));
    }

    function test_card_can_be_set_to_a_specific_total_less_than_max()
    {

    }
}
