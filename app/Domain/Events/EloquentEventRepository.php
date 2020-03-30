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

    public function involving($userId)
    {
        return $this->newQuery()
            ->select('events.*')
            ->addSelect('users.slug AS registered')
            ->leftJoin('participants', function($join) use ($userId) {
                $join->on('participants.event_id', '=', 'events.id');
            })
            ->leftJoin('users', 'users.id', '=', 'participants.user_id')
            ->where('events.user_id', $userId)
            ->orWhere('participants.user_id', '=', $userId)
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function view(string $slug, $userId): Event
    {
        $query = $this->newQuery()
            ->select('events.*')
            ->where('events.slug', $slug);

        // If the user id is provided, we want to see if the user has registered.
        if ($userId) {
            $query->addSelect('users.slug AS registered');
            $query->leftJoin('participants', function($join) use ($userId) {
                $join->on('participants.event_id', '=', 'events.id');
                $join->where('participants.user_id', '=', $userId);
            });
            $query->leftJoin('users', 'users.id', '=', 'participants.user_id');
        }

        return$query->firstOrFail();
    }
}
