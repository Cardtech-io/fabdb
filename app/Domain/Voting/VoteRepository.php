<?php
namespace FabDB\Domain\Voting;

use FabDB\Library\Repository;

interface VoteRepository extends Repository
{
    /**
     * Retrieve a number of votes for the given voteable type and id.
     *
     * @param VoteableType $type
     * @param int $foreignId
     * @return mixed
     */
    public function get(VoteableType $type, int $foreignId);

    /**
     * Cast a vote, either creating a new record or updating an existing record.
     *
     * @param int $userId
     * @param string $type
     * @param int $foreignId
     * @param string $direction
     * @return mixed
     */
    public function cast(int $userId, string $type, int $foreignId, string $direction);
}
