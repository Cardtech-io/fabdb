<?php
namespace FabDB\Domain\Cards;

interface CardRepository
{
    public function search(string $useCase, array $keywords, $class, $type, $view, int $userId = null);

    public function find(string $identifier, int $userId = null);
}
