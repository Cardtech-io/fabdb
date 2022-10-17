<?php

namespace FabDB\Domain\Cards\Search\Params;

class Life extends Param
{
    use StatParam;

    public function handles(string $filter): bool
    {
        return in_array($filter, ['l', 'life']);
    }

    public function title(): string
    {
        return 'Life';
    }

    protected function stat(): string
    {
        return 'life';
    }
}
