<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\Repository;

interface ListingRepository extends Repository
{
    public function remove(int $storeId, int $cardId);
}
