<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

class OrderFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return true;
    }

    public function applyTo(Builder $query, array $input)
    {
        $order = $input['order'] ?? 'identifier';

        switch ($order) {
            case 'identifier':
                $query->orderBy('cards.identifier');
                break;
            case 'id':
                $query->orderBy('cards.id');
                break;
        }
    }
}