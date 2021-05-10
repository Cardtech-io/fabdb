<?php
namespace FabDB\Domain\Practise;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentPractiseRepository extends EloquentRepository implements PractiseRepository
{
    protected function model(): Model
    {
        return new Practise;
    }
}
