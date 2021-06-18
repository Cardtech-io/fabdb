<?php
namespace FabDB\Domain\Decks\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class PriceCalculationFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return Arr::has($input, 'currency');
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->addSelect(
            DB::raw("(
                SELECT
                    SUM(deck_cards.total * card_means.mean_{$input['currency']})
                    FROM deck_cards
                    JOIN card_means ON card_means.card_id = deck_cards.card_id
                    WHERE deck_cards.deck_id = decks.id
                ) AS total_price"
            ));
    }
}
