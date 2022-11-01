<?php

namespace FabDB\Domain\Cards\Search\Params;

class Talent extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['ta', 'talent']);
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $talents = $this->toArray($value);

        $query->where(function ($query) use ($talents, $invert) {
            foreach ($talents as $talent) {
                if ($talent === 'none') {
                    $method = $invert ? 'whereNotNull' : 'whereNull';

                    $query->{$method}('cards.talent');
                } else {
                    $query->orWhere('cards.talent', $this->operator($invert), $talent);
                }
            }
        });
    }

    public function title(): string
    {
        return 'Talent';
    }
}
