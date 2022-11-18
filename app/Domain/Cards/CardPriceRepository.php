<?php

namespace FabDB\Domain\Cards;

use FabDB\Library\Repository;

interface CardPriceRepository extends Repository
{
    public function forSource(string $source);

    public function createMany(array $cardPrices);
}
