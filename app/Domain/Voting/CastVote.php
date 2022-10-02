<?php
namespace FabDB\Domain\Voting;

class CastVote
{
    /**
     * @var string
     */
    private $type;

    /**
     * @var int
     */
    private $foreignId;

    /**
     * @var string
     */
    private $direction;

    /**
     * @var int
     */
    private $userId;

    public function __construct(int $userId, string $type, int $foreignId)
    {
        $this->userId = $userId;
        $this->type = $type;
        $this->foreignId = $foreignId;
    }

    public function handle(VoteRepository $votes)
    {
        $votes->cast($this->userId, $this->type, $this->foreignId);
    }
}
