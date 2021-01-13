<?php
namespace FabDB\Domain\Cards\Search;

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

        if (Arr::get($input, 'use-case') === 'build') {
            $query->orderBy('build_order');
            $query->orderBy('cards.name');
            $query->orderBy('cards.id');
            return;
        }

        switch ($order) {
            case 'sku':
                $query->orderBy('printings.sku');
            case 'identifier':
                $query->orderBy('cards.name');
                $query->orderByRaw("JSON_EXTRACT(stats, '$.resource')");
                break;
            case 'id':
                $query->orderBy('cards.id');
                break;
        }
    }
}
