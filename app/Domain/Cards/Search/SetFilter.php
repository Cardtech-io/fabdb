<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

class SetFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['set']) && $input['set'] != 'all';
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->where('identifier', 'LIKE', $input['set'] . '%');
    }
}
