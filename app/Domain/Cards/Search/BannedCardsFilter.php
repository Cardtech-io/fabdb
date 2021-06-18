<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;

class BannedCardsFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['use-case']) && $input['use-case'] == 'build';
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->whereNotIn('cards.identifier', config('game.cards.banned'));
    }
}
