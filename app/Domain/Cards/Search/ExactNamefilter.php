<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class ExactNameFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return Arr::has($input, 'name');
    }

    public function applyTo(Builder $query, array $input)
    {
        $name = addslashes($input['name']);

        $query->where('name', $name);
    }
}
