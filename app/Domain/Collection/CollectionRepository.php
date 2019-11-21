<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;

interface CollectionRepository
{
    public function add(int $cardId, int $userId, CardType $type);

    public function remove(int $cardId, int $userId, CardType $type);
}