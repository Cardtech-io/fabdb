<?php
namespace FabDB\Domain\Voting;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

trait Voteable
{
    public function votes()
    {
        return $this->morphMany(Vote::class, 'voteable');
    }

    public function scopeWithVotes($query)
    {
        $query->addSelect($this->getTable().'.total_votes');
        $query->addSelect($this->getTable().'.week_votes');

        $query->addSelect('my_vote.value AS my_vote');

        $query->leftJoin(DB::raw('`votes` as my_vote'), function($query) {
            $query->where('my_vote.voteable_type', get_class($this));
            $query->on('my_vote.voteable_id', $this->getTable().'.id');
            $query->where('my_vote.user_id', object_get(request()->user(), 'id', 0));
        });

        $query->groupBy($this->getTable().'.id');
    }

    public function getTotalVotesAttribute($total)
    {
        return (int) $total;
    }

    public function getMyVoteAttribute($value)
    {
        return (int) $value;
    }

    public function incrementVotes()
    {
        $this->totalVotes++;
        $this->save();
    }

    public function decrementVotes()
    {
        $this->totalVotes--;
        $this->save();
    }
}
