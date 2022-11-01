<?php

namespace FabDB\Domain\Cards\Search\Params;

class SubType extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['st', 'subtype']);
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $query->where('cards.sub_type', $this->operator($invert), $value);
    }

    public function title(): string
    {
        return 'Card subtype';
    }
}
