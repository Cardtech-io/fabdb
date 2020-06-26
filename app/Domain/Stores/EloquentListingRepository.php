<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentListingRepository extends EloquentRepository implements ListingRepository
{
    protected function model(): Model
    {
        return new Listing;
    }

    public function remove(int $storeId, int $cardId)
    {
        $this->newQuery()
            ->whereStoreId($storeId)
            ->whereCardId($cardId)
            ->delete();
    }
}