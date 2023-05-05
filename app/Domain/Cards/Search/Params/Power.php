<?php

namespace FabDB\Domain\Cards\Search\Params;

class Power extends Param
{
    use StatParam;

    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['a', 'attack', 'pow', 'power']) && $operator != null;
    }

    public function title(): string
    {
        return 'Power';
    }

    protected function stat(): string
    {
        return 'attack';
    }
}
