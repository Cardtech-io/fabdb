<?php

namespace FabDB\Domain\Cards\Search\Params;

use Illuminate\Support\Str;

class Name extends Param
{
    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['n', 'name']) && $operator != null;
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $value = Str::replace('*', '%', $value);
        $query->where('cards.name', $this->operator($invert, 'LIKE'), "$value");
    }

    public function title(): string
    {
        return 'Name';
    }
}
