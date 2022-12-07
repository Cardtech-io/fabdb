<?php

namespace FabDB\Domain\Cards\Search\Params;

class Rarity extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['r', 'rarity']);
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $query->where('printings.rarity', $this->operator($invert), $value);
    }

    public function title(): string
    {
        return 'Rarity';
    }
}
