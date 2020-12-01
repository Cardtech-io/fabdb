<?php
namespace Tests\Unit\Domain\Cards;

use FabDB\Domain\Cards\Finish;
use Tests\TestCase;

class FinishTest extends TestCase
{
    function test_finish_matches_cold_foils()
    {
        $finish = Finish::fromString('CF');

        $this->assertTrue($finish->cold());
    }

    function test_finish_matches_rainbow_foils()
    {
        $finish = Finish::fromString('rf');

        $this->assertTrue($finish->rainbow());
    }

    function test_finish_matches_gold_foils()
    {
        $finish = Finish::fromString('gF');

        $this->assertTrue($finish->gold());
    }

    function test_finish_matches_extended_art()
    {
        $finish = Finish::fromString('ea');

        $this->assertTrue($finish->extendedArt());
    }
}
