<?php

namespace FabDB\Domain\Cards\Search\Params;

class Pitch extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['p', 'pitch', 'resource']);
    }

    public function applyTo($query, string $operator, $value, bool $invert)
    {
        if ($invert) {
            $operator = $this->operator($invert);
        }

        $query->where("stats->resource", $operator, $value);
    }

    public function title(): string
    {
        return 'Pitch/Resource';
    }
}
