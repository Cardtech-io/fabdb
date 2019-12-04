<?php
namespace Tests\Unit\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\Validation\SupportsWeapon;
use Tests\TestCase;
use Tests\TestsCards;

class SupportsWeaponTest extends TestCase
{
    use TestsCards;

    private $cards;

    function init()
    {
        $this->cards = $this->mockCardRepository();
    }

    function test_it_passes_when_card_is_not_a_weapon()
    {
        $validator = new SupportsWeapon(new Deck);

        $this->cards->shouldReceive('find')->andReturn($this->card('weapon', ['equipment']));

        $this->assertTrue($validator->passes('card', 'WTR003'));
    }

    function test_passes_when_deck_has_no_weapons()
    {
        $deck = new Deck;
        $deck->setRelation('cards', collect([]));

        $validator = new SupportsWeapon($deck);

        $this->cards->shouldReceive('find')->andReturn($this->card('weapon', ['weapon']));

        $this->assertTrue($validator->passes('card', 'WTR00897'));
    }

    function test_passes_when_deck_has_1h_weapon_and_chosen_weapon_is_also_1h()
    {
        $deck = new Deck;
        $deck->setRelation('cards', collect([$this->card('weapon', ['weapon', '1h'])]));

        $validator = new SupportsWeapon($deck);

        $this->cards->shouldReceive('find')->andReturn($this->card('weapon', ['weapon', '1h']));

        $this->assertTrue($validator->passes('card', 'WTR007'));
    }

    function test_it_fails_when_deck_has_1h_weapon_and_chosen_weapon_is_2h()
    {
        $deck = new Deck;
        $deck->setRelation('cards', collect([$this->card('weapon', ['weapon', '1h'])]));

        $validator = new SupportsWeapon($deck);

        $this->cards->shouldReceive('find')->andReturn($this->card('weapon', ['weapon', '2h']));

        $this->assertFalse($validator->passes('card', 'WTR018'));
    }
}
