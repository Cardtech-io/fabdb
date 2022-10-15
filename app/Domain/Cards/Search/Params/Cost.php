<?php

namespace FabDB\Domain\Cards\Search\Params;

class Cost extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['co', 'cost']);
    }

    public function applyTo($query, string $operator, $value, bool $invert)
    {
        if ($invert) {
            $operator = $this->operator($invert);
        }

        $query->where("stats->cost", $operator, $value);
    }

    public function title(): string
    {
        return 'Cost';
    }
}
