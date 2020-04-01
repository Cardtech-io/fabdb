<?php
namespace FabDB\Domain\Events;

use FabDB\Library\Repository;

interface EventRepository extends Repository
{
    public function involving($userId);

    public function view(string $slug, $userId): Event;

    public function submitDeck(Event $event, int $deckId, int $userId);
}
