<?php
namespace FabDB\Domain\Practise;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentPackRepository extends EloquentRepository implements PackRepository
{
    protected function model(): Model
    {
        return new Pack;
    }
}
