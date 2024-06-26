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

            if (isset($input['set'])) {
                $sets = is_array($input['set']) ? $input['set'] : explode(',', $input['set']);

                $join->where(function ($query) use ($sets) {
                    foreach ($sets as $set) {
                        $query->orWhere('printings.sku', 'LIKE', $set.'%');
                    }
                });
            }
        });
    }
}
