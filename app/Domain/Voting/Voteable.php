<?php
namespace FabDB\Domain\Voting;

trait Voteable
{
    public function votes()
    {
        return $this->morphMany(Vote::class, 'voteable');
    }

    public function scopeWithVotes($query)
    {
        $query->selectRaw('SUM(`votes`.`value`) AS total_votes');
        $query->leftJoin('votes', function($query) {
            $query->on('votes.voteable_type', get_class($this));
            $query->on('votes.voteable_id', $this->getTableName().'.id');
        });
        $query->groupBy($this->getTableName().'.id');
    }
}
