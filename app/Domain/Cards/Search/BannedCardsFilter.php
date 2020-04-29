<?php
namespace FabDB\Domain\Cards\Search;

class BannedCardsFilter
{
    public function applies(array $input)
    {
        return isset($input['use-case']) && $input['use-case'] == 'build';
    }

    public function applyTo($query, array $input)
    {
        $query->whereNotIn('identifier', config('cards.banned'));
    }
}
