<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Cards\Cards;
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
        $deck->setRelation('hero', $this->card('hero', [
            'class' => 'guardian',
            'type' => 'hero',
            'keywords' => ['guardian', 'hero']
        ]));

        $card1 = $this->card('001', ['keywords' => ['guardian', 'weapon', '1h']]);
        $card2 = $this->card('002', ['keywords' => ['ninja', 'weapon', '1h']]);
        $card3 = $this->card('003', ['keywords' => ['generic', 'weapon', '1h']]);

        $validator1 = new MatchesKeywords($deck);
        $validator2 = new MatchesKeywords($deck);
        $validator3 = new MatchesKeywords($deck);

        $this->cards->shouldReceive('findByIdentifier')->with('WTR001')->andReturn($card1);
        $this->cards->shouldReceive('findByIdentifier')->with('WTR002')->andReturn($card2);
        $this->cards->shouldReceive('findByIdentifier')->with('WTR003')->andReturn($card3);

        $this->assertTrue($validator1->passes('card', 'WTR001'));
        $this->assertFalse($validator2->passes('card', 'WTR002'));
        $this->assertTrue($validator3->passes('card', 'WTR003'));
    }

    function test_when_card_added_is_hero()
    {
        $deck = new Deck;
        $deck->setRelation('cards', new Cards);

        $card = $this->card('hero', ['type' => 'hero', 'keywords' => ['guardian', 'hero']]);
        $validator = new MatchesKeywords($deck);

        $this->cards->shouldReceive('findByIdentifier')->with('WTR001')->andReturn($card);

        $this->assertTrue($validator->passes('card', 'WTR001'));
    }

    function test_keyword_matching_with_essence_cards()
    {
        $hero = $this->card('Lexi', ['type' => 'hero', 'class' => 'ranger', 'text' => '**Essence of Ice and Lightning']);

        $deck = new Deck;
        $deck->setRelation('hero', $hero);

        $card = $this->card('weave lightning', ['keywords' => ['lightning', 'action']]);

        $this->cards->shouldReceive('findByIdentifier')->with('000')->andReturn($card);

        $validator = new MatchesKeywords($deck);

        $this->assertTrue($validator->passes('card', '000'));
    }
}
