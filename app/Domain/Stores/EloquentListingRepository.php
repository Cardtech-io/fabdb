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

    public function forCard(int $cardId)
    {
        return $this->newQuery()
            ->select('listings.id', 'listings.available', 'listings.price', 'listings.path', 'printings.sku', 'stores.currency', 'stores.name', 'stores.domain')
            ->join('printings', 'printings.id', 'listings.printing_id')
            ->join('stores', 'stores.id', 'listings.store_id')
            ->where('stores.active', true)
            ->where('listings.card_id', $cardId)
            ->where('available', '>', '0')
            ->get();
    }
}
