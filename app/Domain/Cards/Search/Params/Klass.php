<?php

namespace FabDB\Domain\Cards\Search\Params;

class Klass extends Param
{
    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['c', 'class']) && $operator != null;
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $classes = $this->toArray($value);

        $query->where(function ($query) use ($classes, $invert) {
            foreach ($classes as $class) {
                if ($class === 'none') {
                    $method = $invert ? 'whereNotNull' : 'whereNull';

                    $query->{$method}('cards.classes');
                } else {
                    $method = $invert ? 'orWhereJsonDoesntContain' : 'orWhereJsonContains';

                    $query->$method('cards.classes', $class);
                }
            }
        });
    }

    public function title(): string
    {
        return 'Class';
    }
}
