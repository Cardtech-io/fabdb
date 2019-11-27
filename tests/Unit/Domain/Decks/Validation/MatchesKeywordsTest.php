<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\MatchesKeywords;
use Tests\TestCase;
use Tests\TestsCards;

class MatchesKeywordsTest extends TestCase
{
    use TestsCards;

    function test_card_added_matches_required_keywords()
    {
        $deck = new Deck;
        $deck->setRelation('cards', collect([$this->card('hero', ['hero', 'guardian'])]));

        $validator1 = new MatchesKeywords($deck, $this->card('Mace', ['guardian', 'weapon', '1h']));
        $validator2 = new MatchesKeywords($deck, $this->card('Dagger', ['ninja', 'weapon', '1h']));
        $validator3 = new MatchesKeywords($deck, $this->card('Sword', ['generic', 'weapon', '1h']));

        $this->assertTrue($validator1->passes('card', 'WTR567'));
        $this->assertFalse($validator2->passes('card', 'WTR567'));
        $this->assertTrue($validator3->passes('card', 'WTR567'));
    }
}
