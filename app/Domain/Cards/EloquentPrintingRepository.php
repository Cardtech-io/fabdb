<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentPrintingRepository extends EloquentRepository implements PrintingRepository
{
    protected function model(): Model
    {
        return new Printing;
    }

    public function findBySku(string $sku)
    {
        return $this->newQuery()->whereSku($sku)->first();
    }
}
