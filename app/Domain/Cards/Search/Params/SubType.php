<?php

namespace FabDB\Domain\Cards\Search\Params;

class SubType extends Param
{
    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['st', 'subtype']) && $operator != null;
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $method = $invert ? 'whereJsonDoesntContain' : 'whereJsonContains';

        $query->$method('cards.sub_types', $value);
    }

    public function title(): string
    {
        return 'Card subtype';
    }
}
