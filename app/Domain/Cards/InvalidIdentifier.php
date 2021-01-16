<?php
namespace FabDB\Domain\Cards;

class InvalidIdentifier extends \Exception
{
    public function __construct(string $identifier)
    {
        parent::__construct('Invalid identifier ['.$identifier.']');
    }
}
