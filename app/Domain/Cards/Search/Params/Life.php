<?php

namespace FabDB\Domain\Cards\Search\Params;

class Life extends Param
{
    use StatParam;

    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['l', 'life']) && $operator != null;
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
