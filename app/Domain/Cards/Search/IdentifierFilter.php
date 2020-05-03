<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class IdentifierFilter implements SearchFilter
{
    use Identifiable;

    public function applies(array $input)
    {
        return Arr::get($input, 'keywords') && $this->matches($input['keywords']);
    }

    public function applyTo(Builder $query, array $input)
    {
        if (is_numeric($input['keywords'])) {
            $query->where('identifier', 'LIKE', '%'.addslashes($input['keywords']));
        }
        else {
            $query->where('identifier', $input['keywords']);
        }
    }
}
