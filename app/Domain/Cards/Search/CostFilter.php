<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class CostFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['cost']) && is_numeric($input['cost']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $operator = $input['cost'] == '4' ? '>=' : '=';

        $query->where("stats->cost", $operator, (int) $input['cost']);
    }
}
