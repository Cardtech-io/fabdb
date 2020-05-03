<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class TypeFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return Arr::get($input, 'type');
    }

    public function applyTo(Builder $query, array $input)
    {
        $type = explode(' ', $input['type']);

        for ($i = 0; $i < count($type); $i++) {
            $query->whereRaw("JSON_SEARCH(keywords, 'one', '{$type[$i]}') IS NOT NULL");
        }
    }
}
