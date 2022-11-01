<?php

namespace FabDB\Domain\Cards\Search\Params;

use Illuminate\Support\Facades\DB;

class Set extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['s', 'set']);
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $query->join(DB::raw('printings ps'), function($join) use ($value, $invert) {
            $join->on('ps.card_id', 'cards.id');
            $join->where('ps.sku', $this->operator($invert, 'LIKE'), $value.'%');
        });
    }

    public function title(): string
    {
        return 'Set';
    }
}
