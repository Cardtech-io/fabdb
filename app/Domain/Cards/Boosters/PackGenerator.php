<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Set;

interface PackGenerator
{
    public function isFor(Set $set);
    public function generate(Set $set);
}
