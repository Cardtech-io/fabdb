<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\MatchesKeywords;
use Tests\TestCase;
use Tests\TestsCards;

class MatchesKeywordsTest extends TestCase
{
    use TestsCards;

    private $cards;

    function init()
    {
        $this->cards = $this->mockCardRepository();
    }

    function test_card_added_matches_required_keywords()
    {
        $deck = new Deck;
        $deck->setRelation('cards', collect([$this->card('hero', ['hero', 'guardian'])]));

        $card1 = $this->card('WTR001', ['guardian', 'weapon', '1h']);
        $card2 = $this->card('WTR002', ['ninja', 'weapon', '1h']);
        $card3 = $this->card('WTR003', ['generic', 'weapon', '1h']);

        $validator1 = new MatchesKeywords($deck, $card1);
        $validator2 = new MatchesKeywords($deck, $card2);
        $validator3 = new MatchesKeywords($deck, $card3);

        $this->cards->shouldReceive('find')->with('WTR001')->andReturn($card1);
        $this->cards->shouldReceive('find')->with('WTR002')->andReturn($card2);
        $this->cards->shouldReceive('find')->with('WTR003')->andReturn($card3);

        $this->assertTrue($validator1->passes('card', 'WTR001'));
        $this->assertFalse($validator2->passes('card', 'WTR002'));
        $this->assertTrue($validator3->passes('card', 'WTR003'));
    }
}
