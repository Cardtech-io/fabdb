<?php

namespace FabDB\Domain\Cards;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentCardPriceRepository extends EloquentRepository implements CardPriceRepository
{
    public function forSource(string $source)
    {
        return $this->newQuery()
            ->with(['card'])
            ->whereSource($source)
            ->get()
            ->keyBy('source_id');
    }

    public function createMany(array $cardPrices)
    {
        $this->model()->insert($cardPrices);
    }

    protected function model(): Model
    {
        return new CardPrice;
    }
}
