<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Market\PriceAveragesRepository;
use FabDB\Domain\Stores\ListingRepository;
use Illuminate\Http\Request;

class MarketController extends Controller
{
    public function cardTrend(Request $request, PriceAveragesRepository $averages)
    {
        $pricing = $averages->forCard($request->card->id, $request->get('days'), $request->get('currency', 'USD'));

        return $pricing->keyBy('date')->map(function($record) {
            return [
                $record->low,
                $record->mean,
                $record->high,
            ];
        });
    }

    public function listings(Request $request, CardRepository $cards, ListingRepository $listings)
    {
        $card = $cards->findByIdentifier($request->get('card'));

        return $listings->forCard($card->id);
    }

    public function prices(Request $request, PriceAveragesRepository $averages)
    {
        return $averages->list($request->all())
            ->paginate($request->get('per_page', 50))
            ->appends($request->except('page'));
    }
}
