<?php

namespace FabDB\Domain\Cards\Search\Params;

class Pitch extends Param
{
    use StatParam;

    public function handles(string $filter): bool
    {
        return in_array($filter, ['p', 'pitch', 'resource']);
    }

    public function title(): string
    {
        return 'Pitch/Resource';
    }

    protected function stat(): string
    {
        return 'resource';
    }
}
