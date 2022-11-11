<?php

namespace FabDB\Domain\Cards\Search\Params;

use FabDB\Domain\Cards\Search\Identifiable;
use Illuminate\Support\Facades\Request;

class Term extends Param
{
    use Identifiable;

    private string $filter;

    public function handles(string $filter): bool
    {
        $this->filter = $filter;

        return !$this->matchesIdentifier(Request::get('keywords'));
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
