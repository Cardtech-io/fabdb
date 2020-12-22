<?php
namespace FabDB\Domain\Collection;

interface CollectionRepository
{
    public function add(int $cardId, int $printingId, int $userId, int $total);

    public function update(int $cardId, int $printingId, int $userId, int $total);

    public function remove(int $printingId, int $userId, int $total);
}
