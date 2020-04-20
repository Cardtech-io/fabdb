<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Library\Repository;
use Illuminate\Support\Collection;

interface DeckRepository extends Repository
{
    public function forUser(int $userId): Collection;

    public function bySlugWithCards(string $slug, bool $includeCards = false);

    public function addCardToDeck(int $deckId, int $cardId);

    public function removeCardFromDeck(int $deckId, int $cardId);

    public function addCardToSideboard(int $deckId, int $cardId);
}
