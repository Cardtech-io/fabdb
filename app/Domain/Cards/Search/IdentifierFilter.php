<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class IdentifierFilter implements SearchFilter
{
    use Identifiable;

    public function applies(array $input)
    {
        return Arr::get($input, 'keywords') && $this->matchesIdentifier($input['keywords']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $identifiers = $this->identifiers($input['keywords']);

        $query->addSelect('printings.sku');

        $query->where(function($query) use ($identifiers) {
            foreach ($identifiers as $identifier) {
                $query->orWhere('cards.identifier', $identifier);
                $query->orWhere('printings.sku', $identifier);
            }
        });
    }
}
