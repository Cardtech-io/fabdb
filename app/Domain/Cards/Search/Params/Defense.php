<?php

namespace FabDB\Domain\Cards\Search\Params;

class Defense extends Param
{
    use StatParam;

    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['b', 'd', 'defense', 'block']) && $operator != null;
    }

    public function title(): string
    {
        return 'Defense/Block';
    }

    protected function stat(): string
    {
        return 'defense';
    }
}
