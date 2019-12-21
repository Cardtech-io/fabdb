<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;

trait RequiresCard
{
    private function getCard(string $identifier): Card
    {
        return app(CardRepository::class)->findByIdentifier($identifier);
    }
}
