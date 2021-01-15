<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\Repository;

interface StoreRepository extends Repository
{
    public function findAllOver(int $storeId);
}
