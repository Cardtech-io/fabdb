<?php

namespace FabDB\Domain\Cards\Search\Params;

class Power extends Param
{
    use StatParam;

    public function handles(string $filter): bool
    {
        return in_array($filter, ['a', 'attack', 'pow', 'power']);
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
