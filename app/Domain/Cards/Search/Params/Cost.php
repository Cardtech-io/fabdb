<?php

namespace FabDB\Domain\Cards\Search\Params;

class Cost extends Param
{
    use StatParam;

    public function handles(string $filter): bool
    {
        return in_array($filter, ['co', 'cost']);
    }

    public function title(): string
    {
        return 'Cost';
    }

    protected function stat(): string
    {
        return 'cost';
    }
}
