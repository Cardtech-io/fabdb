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
            ->with('players')
            ->select('events.*', DB::raw('COUNT(players.id) AS player_count'))
            ->leftJoin('players', 'players.event_id', '=', 'events.id')
            ->leftJoin(DB::raw('players AS playing'), function($join) use ($userId) {
                $join->on('playing.event_id', '=', 'events.id');
                $join->where('playing.user_id', $userId);
            })
            ->where('events.user_id', $userId)
            ->orWhereNotNull('playing.id')
            ->orderBy('starts_at', 'desc')
            ->groupBy('events.id')
            ->get();
    }

    public function view(string $slug, $userId): Event
    {
        $query = $this->newQuery()
            ->with('players', 'players.user')
            ->with('decks', 'decks.user')
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

    public function submitDeck(Event $event, int $deckId, int $userId)
    {
        DB::statement('DELETE FROM submitted_decks WHERE event_id = ? AND user_id = ?', [$event->id, $userId]);

        $event->decks()->attach([$deckId => ['user_id' => $userId]]);
    }
}
