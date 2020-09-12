<?php
namespace FabDB\Domain\Comments;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class CommentWasPosted implements Loggable
{
    use LogsParams;

    /**
     * @var CommentableType
     */
    private $commentableType;

    /**
     * @var int
     */
    private $foreignId;

    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $content;

    public function __construct(CommentableType $commentableType, int $foreignId, int $userId, string $content)
    {
        $this->commentableType = $commentableType;
        $this->foreignId = $foreignId;
        $this->userId = $userId;
        $this->content = $content;
    }

    public function commentableType(): string
    {
        return $this->commentableType;
    }

    public function foreignId(): int
    {
        return $this->foreignId;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function content(): string
    {
        return $this->content;
    }
}
