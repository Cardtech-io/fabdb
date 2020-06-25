<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentStoreRepository extends EloquentRepository implements StoreRepository
{
    protected function model(): Model
    {
        return new Store;
    }
}
