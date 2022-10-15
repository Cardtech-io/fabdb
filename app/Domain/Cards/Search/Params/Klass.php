<?php

namespace FabDB\Domain\Cards\Search\Params;

class Klass extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['c', 'class']);
    }

    public function applyTo($query, string $operator, $value, bool $invert)
    {
        $classes = $this->toArray($value);

        $query->where(function ($query) use ($classes, $invert) {
            foreach ($classes as $class) {
                if ($class === 'none') {
                    $method = $invert ? 'whereNotNull' : 'whereNull';

                    $query->{$method}('cards.class');
                } else {
                    $query->orWhere('cards.class', $this->operator($invert), $class);
                }
            }
        });
    }

    public function title(): string
    {
        return 'Class';
    }
}
