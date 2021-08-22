<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class OrderFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return true;
    }

    public function applyTo(Builder $query, array $input)
    {
        $order = $input['order'] ?? 'identifier';
        $direction = $input['direction'] ?? 'asc';

        if (Arr::get($input, 'use-case') === 'build') {
            $query->orderBy('build_order');
            $query->orderBy('cards.name');
            $query->orderBy('cards.id');
            return;
        }

        switch ($order) {
            case 'sku':
                $query->orderBy('printings.sku', $direction);
            case 'identifier':
                $query->orderBy('cards.identifier', $direction);
                break;
            case 'name':
                $query->orderBy('cards.name', $direction);
                $query->orderByRaw("JSON_EXTRACT(stats, '$.resource')");
                break;
            case 'rarity':
                $query->orderBy('cards.rarity', $direction);
                break;
            case 'id':
                $query->orderBy('cards.id', $direction);
                break;
        }
    }
}
