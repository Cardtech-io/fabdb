<?php
namespace FabDB\Domain\Events;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentEventRepository extends EloquentRepository implements EventRepository
{
    protected function model(): Model
    {
        return new Event;
    }

    public function runBy($userId)
    {
        return $this->newQuery()
            ->whereUserId($userId)
            ->orderBy('updated_at', 'desc')
            ->get();
    }
}
