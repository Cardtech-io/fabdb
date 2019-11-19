<?php
namespace FabDB\Domain\Cards;

interface CardRepository
{
    public function search(array $params);

    public function find(string $identifier, int $userId = null);
}
