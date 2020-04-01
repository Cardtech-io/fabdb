<?php
namespace FabDB\Domain\Events;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

class EloquentEventRepository extends EloquentRepository implements EventRepository
{
    protected function model(): Model
    {
        return new Event;
    }

    public function involving($userId)
    {
        return $this->newQuery()
            ->select('events.*', DB::raw('COUNT(players.id) AS player_count'))
            ->addSelect('users.slug AS registered')
            ->leftJoin('players', function($join) use ($userId) {
                $join->on('players.event_id', '=', 'events.id');
            })
            ->leftJoin('users', 'users.id', '=', 'players.user_id')
            ->where('events.user_id', $userId)
            ->orWhere('players.user_id', '=', $userId)
            ->orderBy('updated_at', 'desc')
            ->groupBy('events.id', 'registered')
            ->get();
    }

    public function view(string $slug, $userId): Event
    {
        $query = $this->newQuery()
            ->with('players', 'players.user')
            ->select('events.*')
            ->where('events.slug', $slug);

        // If the user id is provided, we want to see if the user has registered.
        if ($userId) {
            $query->addSelect('users.slug AS registered');
            $query->leftJoin('players', function($join) use ($userId) {
                $join->on('players.event_id', '=', 'events.id');
                $join->where('players.user_id', '=', $userId);
            });
            $query->leftJoin('users', 'users.id', '=', 'players.user_id');
        }

        return $query->firstOrFail();
    }
}
