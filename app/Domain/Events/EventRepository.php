<?php
namespace FabDB\Domain\Events;

use FabDB\Library\Repository;

interface EventRepository extends Repository
{
    public function runBy($userId);
}
