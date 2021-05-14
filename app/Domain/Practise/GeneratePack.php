<?php
namespace FabDB\Domain\Practise;

use FabDB\Domain\Cards\Set;

class GeneratePack
{
    private int $practiseId;

    public function __construct(int $practiseId, Set $set)
    {
        $this->practiseId = $practiseId;
    }
}
