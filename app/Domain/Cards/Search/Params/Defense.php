<?php

namespace FabDB\Domain\Cards\Search\Params;

class Defense extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['b', 'd', 'defense', 'block']);
    }

    public function applyTo($query, string $operator, $value, bool $invert)
    {
        if ($invert) {
            $operator = $this->operator($invert);
        }

        $query->where("stats->defense", $operator, $value);
    }

    public function title(): string
    {
        return 'Defense/Block';
    }
}
