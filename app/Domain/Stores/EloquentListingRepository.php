<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentListingRepository extends EloquentRepository implements ListingRepository
{
    protected function model(): Model
    {
        new Listing;
    }
}