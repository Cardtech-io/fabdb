<?php
namespace FabDB\Domain\Voting;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

class EloquentVoteRepository extends EloquentRepository implements VoteRepository
{
    protected function model(): Model
    {
        return new Vote;
    }

    public function get(VoteableType $type, int $foreignId)
    {
        return $this->newQuery()
            ->with(['user' => function($with) {
                $with->select('users.id', 'users.subscription', 'users.name', 'users.slug');
            }])
            ->whereVoteableType($type)
            ->whereVoteableId($foreignId)
            ->limit(10)
            ->get();
    }

    public function cast(int $userId, string $type, int $foreignId, string $direction)
    {
        DB::transaction(function() use ($userId, $type, $foreignId, $direction) {
            $value = $direction == 'up' ? 1 : -1;

            $vote = $this->newQuery()
                ->where('voteable_type', $type)
                ->where('voteable_id', $foreignId)
                ->where('user_id', $userId)
                ->first();

            if ($vote) {
                // Resetting the vote
                if ($value == $vote->value) {
                    $vote->delete();
                    $vote->voteable->decrementVotes();
                } else {
                    $vote->value = $value;
                    $vote->save();
                    $vote->voteable->incrementVotes();
                }
            } else {
                Vote::create(['voteable_type' => $type, 'voteable_id' => $foreignId, 'user_id' => $userId, 'value' => $value]);
            }
        });
    }
}
