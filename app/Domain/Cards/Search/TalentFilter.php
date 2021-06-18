<?php

namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;

class TalentFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['talent']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->whereRaw("JSON_SEARCH(keywords, 'one', '{$input['talent']}') IS NOT NULL");
    }
}
