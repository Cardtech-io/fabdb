<?php
namespace FabDB\Domain\Cards\Search;

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
        $query->where('printings.sku', 'LIKE', '%'.addslashes($input['keywords']).'%');
    }
}
