<?php

namespace FabDB\Domain\Cards\Search\Params;

class Intellect extends Param
{
    use StatParam;

    public function handles(string $filter): bool
    {
        return in_array($filter, ['i', 'int', 'intellect']);
    }

    public function title(): string
    {
        return 'Intellect';
    }

    protected function stat(): string
    {
        return 'intellect';
    }
}
