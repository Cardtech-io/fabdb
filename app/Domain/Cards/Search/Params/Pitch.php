<?php

namespace FabDB\Domain\Cards\Search\Params;

class Pitch extends Param
{
    use StatParam;

    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['p', 'pitch', 'resource']) && $operator != null;
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
