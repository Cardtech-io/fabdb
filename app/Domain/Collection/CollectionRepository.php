<?php
namespace FabDB\Domain\Collection;

interface CollectionRepository
{
    public function add(int $cardId, int $userId);

    public function remove(int $cardId, int $userId);
}