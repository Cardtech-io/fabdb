<?php

namespace FabDB\Domain\Cards\Search\Params;

class CardType extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['t', 'type']);
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $query->where('cards.type', $this->operator($invert), $value);
    }

    public function title(): string
    {
        return 'Card type';
    }
}
