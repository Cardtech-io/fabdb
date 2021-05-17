<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Set;

class Box
{
    /**
     * @var PackGenerator[]
     */
    public array $generators;

    public function __construct(PackGenerator ...$generators)
    {
        $this->generators = $generators;
    }

    public function crackPack(Set $set)
    {
        foreach ($this->generators as $generator) {
            if ($generator->isFor($set)) {
                return $generator->generate();
            }
        }

        throw new InvalidPackGenerator;
    }
}
