<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

class SetFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['set']) && $input['set'] != 'all';
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->join('printings', function($join) use ($input) {
            $join->on('printings.card_id', 'cards.id');
            $join->where('printings.sku', 'LIKE', $input['set'].'%');
        });
    }
}
