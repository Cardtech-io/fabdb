<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

class ClassFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['class']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->whereRaw("JSON_SEARCH(keywords, 'one', '{$input['class']}') IS NOT NULL");
    }
}
