<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;

interface CollectionRepository
{
    public function add(int $cardId, int $userId, CardType $type, int $total);

    public function update(int $cardId, int $userId, CardType $type, int $total);

    public function remove(int $cardId, int $userId, CardType $type, int $total);
}
