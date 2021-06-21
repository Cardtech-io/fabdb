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
        if ($input['talent'] === 'none') {
            return $query->whereNull('cards.talent');

        }

        $query->where('cards.talent', $input['talent']);
    }
}
