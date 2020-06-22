<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class PitchFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['pitch']) && is_numeric($input['pitch']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->where("stats->resource", '=', $input['pitch']);
    }
}
