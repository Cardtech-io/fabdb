<?php
namespace FabDB\Domain\Decks\Filters;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class VotesFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return true;
    }

    public function applyTo(Builder $query, array $input)
    {
        if (in_array(Arr::get($input, 'order', []), ['popular-all', 'popular-7'])) {
            $query->withVotes();
        }
    }
}
