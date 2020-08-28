<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class NameFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return Arr::has($input, 'name');
    }

    public function applyTo(Builder $query, array $input)
    {
        $name = addslashes($input['name']);

        $query->where('name', 'LIKE', '%'.$name.'%');
    }
}
