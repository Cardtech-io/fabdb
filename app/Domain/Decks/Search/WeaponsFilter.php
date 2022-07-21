<?php
namespace FabDB\Domain\Decks\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;

class WeaponsFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['include']) && in_array('weapons', explode(',', $input['include']));
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->with(['weapons']);
    }
}
