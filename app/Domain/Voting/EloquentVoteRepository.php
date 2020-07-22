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

            Vote::updateOrCreate([
                'user_id' => $userId,
                'voteable_type' => $type,
                'voteable_id' => $foreignId
            ], ['value' => $value]);
        });
    }
}