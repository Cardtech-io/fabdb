<?php
namespace FabDB\Domain\Market;

use Carbon\Carbon;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

class EloquentPriceAveragesRepository extends EloquentRepository implements PriceAveragesRepository
{
    protected function model(): Model
    {
        return new PriceAverage;
    }

    public function forCard(string $identifier, int $days, string $currency)
    {
        $startDate = Carbon::now()->subDays($days);

        return $this->newQuery()
            ->select(DB::raw('DATE(price_averages.created_at) AS date'), 'price_averages.low', 'price_averages.mean', 'price_averages.high', 'price_averages.currency', 'price_averages.variant')
            ->join('cards', 'cards.id', 'price_averages.card_id')
            ->where('cards.identifier', $identifier)
            ->where('price_averages.currency', $currency)
            ->where('price_averages.created_at', '>=', $startDate->toDateString())
            ->get();
    }
}

