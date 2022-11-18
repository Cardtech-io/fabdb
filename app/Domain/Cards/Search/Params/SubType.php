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
        $method = $invert ? 'whereJsonNotContains' : 'whereJsonContains';

        $query->$method('cards.sub_types', $value);
    }

    public function title(): string
    {
        return 'Card subtype';
    }
}
