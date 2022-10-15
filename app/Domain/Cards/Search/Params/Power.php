<?php

namespace FabDB\Domain\Cards\Search\Params;

use Illuminate\Support\Facades\DB;

class Power extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['a', 'attack', 'pow', 'power']);
    }

    public function applyTo($query, string $operator, $value, bool $invert)
    {
        if ($invert) {
            $operator = $this->operator($invert);
        }

        $query->where("stats->attack", $operator, DB::raw($value));
    }

    public function title(): string
    {
        return 'Power';
    }
}
