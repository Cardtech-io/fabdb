<?php
namespace Tests\Unit\Domain\Cards;

use FabDB\Domain\Cards\Banned;
use Tests\TestCase;

class BannedTest extends TestCase
{
    function test_banned_cards_for_blitz()
    {
        $banned = app(Banned::class);

        $this->assertContains('drone-of-brutality-red', $banned->blitz());
        $this->assertNotContains('duskblade', $banned->blitz());
    }

    function test_returns_banned_cards_for_constructed()
    {
        $banned = app(Banned::class);

        $this->assertCount(7, $banned->constructed());
    }
}
