<?php
namespace FabDB\Domain\Market;

use FabDB\Library\Repository;

interface PriceAveragesRepository extends Repository
{
    public function forCard(string $identifier, int $days, string $currency);
}
