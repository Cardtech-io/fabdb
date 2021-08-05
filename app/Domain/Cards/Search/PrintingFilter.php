<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;

class PrintingFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return true;
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->with('printings');

        $query->join('printings', function ($join) use ($input) {
            $join->on('printings.card_id', 'cards.id');

            if (isset($input['set']) && $input['set'] != 'all') {
                $join->where('printings.sku', 'LIKE', $input['set'].'%');
            }
        });
    }
}
