<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class PrintingFilter implements SearchFilter
{
    use Identifiable;

    public function applies(array $input)
    {
        return true;
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->with(['printings' => function($query) use ($input) {
            if (Arr::get($input, 'keywords') && $this->matchesIdentifier($input['keywords'])) {
                $query->where(function($query) use ($input) {
                    $identifiers = $this->identifiers($input['keywords']);

                    foreach ($identifiers as $identifier) {
                        $query->orWhere('printings.sku', 'LIKE', '%'.$identifier.'%');
                    }
                });
            }
        }]);

        $query->join('printings', function ($join) use ($input) {
            $join->on('printings.card_id', 'cards.id');

            if (isset($input['set']) && $input['set'] != 'all') {
                $join->where('printings.sku', 'LIKE', $input['set'].'%');
            }
        });
    }
}
