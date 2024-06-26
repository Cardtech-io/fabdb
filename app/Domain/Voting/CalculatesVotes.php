<?php
namespace FabDB\Domain\Voting;

use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

trait CalculatesVotes
{
    abstract protected function model(): Model;

    public function calculateWeeklyVotes()
    {
        $table = $this->model()->getTable();
        $type = str_replace('\\', '\\\\', get_class($this->model()));

        DB::update("
            UPDATE `{$table}` t
            JOIN votes
                ON votes.voteable_id = t.id
                AND votes.voteable_type = '{$type}'
                AND votes.created_at >= CURRENT_DATE - INTERVAL 7 DAY
            SET t.week_votes = (
                SELECT COUNT(votes.id) AS vote_count
                FROM votes
                WHERE votes.voteable_id = t.id
                AND votes.voteable_type = '{$type}'
                AND votes.created_at >= CURRENT_DATE - INTERVAL 7 DAY
            )
        ");
    }
}
