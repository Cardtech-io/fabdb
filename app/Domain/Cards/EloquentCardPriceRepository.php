<?php

namespace FabDB\Domain\Cards;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Arr;

class EloquentCardPriceRepository extends EloquentRepository implements CardPriceRepository
{
    protected function model(): Model
    {
        return new CardPrice;
    }

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
        foreach ($cardPrices as $cardPrice) {
            $this->newQuery()->updateOrCreate(Arr::only($cardPrice, ['source_id', 'source']), $cardPrice);
        }
    }

    public function cleanup()
    {
        $this->newQuery()->whereNull('price')->delete();
    }
}
