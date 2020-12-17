<?php
namespace FabDB\Domain\Cards;

class NullIdentifier extends Identifier
{
    public function __construct()
    {
        $this->identifier = '';
    }
}
