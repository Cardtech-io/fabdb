<?php

namespace FabDB\Domain\Cards\Search\Params;

class Term extends Param
{
    private string $filter;

    public function handles(string $filter): bool
    {
        $this->filter = $filter;

        return true;
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $operator = $this->operator($invert, 'LIKE');
        $query->whereRaw("search_text $operator ?", ["%$this->filter%"]);
    }

    public function title(): string
    {
        return 'Term';
    }
}
