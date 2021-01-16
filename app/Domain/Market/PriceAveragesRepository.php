<?php
namespace FabDB\Domain\Market;

use FabDB\Library\Repository;

interface PriceAveragesRepository extends Repository
{
    public function forCard(int $id, int $days, string $currency);

    public function list(array $params);
}
