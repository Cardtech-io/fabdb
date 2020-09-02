<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Market\PriceAveragesRepository;
use Illuminate\Http\Request;

class MarketController extends Controller
{
    public function cardTrend(Request $request, PriceAveragesRepository $averages)
    {
        $pricing = $averages->forCard($request->card->identifier, $request->get('days'), $request->get('currency', 'USD'));

        return $pricing->keyBy('date')->map(function($record) {
            return [
                $record->low,
                $record->mean,
                $record->high,
            ];
        });
    }
}
