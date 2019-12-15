<?php
namespace FabDB\Domain\Cards;

interface CardRepository
{
    public function search(string $view, array $params, $class, $type, int $userId = null);

    public function find(string $identifier, int $userId = null);
}
