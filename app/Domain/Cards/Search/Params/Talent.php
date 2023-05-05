<?php

namespace FabDB\Domain\Cards\Search\Params;

class Talent extends Param
{
    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['ta', 'talent']) && $operator != null;
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $talents = $this->toArray($value);

        $query->where(function ($query) use ($talents, $invert) {
            foreach ($talents as $talent) {
                if ($talent === 'none') {
                    $method = $invert ? 'whereNotNull' : 'whereNull';
                    $query->{$method}('cards.talents');
                } else {
                    $method = $invert ? 'whereJsonDoesntContain' : 'whereJsonContains';
                    $query->{$method}('cards.talents', $talent);
                }
            }
        });
    }

    public function title(): string
    {
        return 'Talent';
    }
}
