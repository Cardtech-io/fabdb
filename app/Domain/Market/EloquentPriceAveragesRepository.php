<?php
namespace FabDB\Domain\Market;

use Carbon\Carbon;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class EloquentPriceAveragesRepository extends EloquentRepository implements PriceAveragesRepository
{
    protected function model(): Model
    {
        return new PriceAverage;
    }

    public function forCard(int $id, int $days, string $currency)
    {
        $startDate = Carbon::now()->subDays($days);

        return $this->newQuery()
            ->selectRaw('DATE(price_averages.created_at) AS date, MIN(price_averages.low) AS low, AVG(price_averages.mean) as mean, MAX(price_averages.high) as high, price_averages.currency')
            ->where('price_averages.card_id', $id)
            ->where('price_averages.currency', $currency)
            ->where('price_averages.created_at', '>=', $startDate->toDateString())
            ->get();
    }

    public function list(array $params)
    {
        $order = Arr::get($params, 'order', 'name');
        $direction = Arr::get($params, 'direction', 'asc');

        $query = (new CurrentPrice)
            ->newQuery()
            ->select('current_prices.*', 'printings.sku', 'cards.identifier', 'cards.name', 'cards.rarity')
            ->join('printings', 'printings.id', 'current_prices.printing_id')
            ->join('cards', 'cards.id', 'printings.card_id')
            ->where('currency', $params['currency']);

            if (isset($params['set']) && $params['set'] != 'all') {
                $query->where('printings.sku', 'LIKE', $params['set'].'%');
            }

        return $query;
    }
}

