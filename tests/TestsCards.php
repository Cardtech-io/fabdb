<?php
namespace Tests;

use FabDB\Domain\Cards\Card;

trait TestsCards
{
    protected function card(string $name, array $keywords = [])
    {
        $card = new Card;
        $card->name = $name;
        $card->keywords = $keywords;

        return  $card;
    }
}
