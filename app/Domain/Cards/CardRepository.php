<?php
namespace FabDB\Domain\Cards;

interface CardRepository
{
    public function search(array $params);
}
