<?php
namespace FabDB\Domain\Comments;

use FabDB\Library\Dispatchable;

class PostComment
{
    use Dispatchable;

    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $type;

    /**
     * @var string
     */
    private $foreign;

    /**
     * @var string
     */
    private $content;

    /**
     * @var PostCommentObserver
     */
    private $observer;

    public function __construct(PostCommentObserver $observer, int $userId, string $type, string $foreign, string $content)
    {
        $this->userId = $userId;
        $this->type = $type;
        $this->foreign = $foreign;
        $this->content = $content;
        $this->observer = $observer;
    }

    public function handle(CommentRepository $comments, CommentableId $commentable)
    {
        $foreignId = $commentable->getId($this->type, $this->foreign);

        $comment = Comment::post(CommentableType::fromRaw($this->type), $foreignId, $this->userId, $this->content);

        $comments->save($comment);

        $this->observer->setComment($comment);

        $this->dispatch($comment->releaseEvents());
    }
}