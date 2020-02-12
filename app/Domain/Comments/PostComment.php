<?php
namespace FabDB\Domain\Comments;

class PostComment
{
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

    public function handle(CommentRepository $comments, Commentable $commentable)
    {
        $foreignId = $commentable->getId($this->type, $this->foreign);

        $comment = Comment::post($this->type, $foreignId, $this->userId, $this->content);

        $comments->save($comment);

        $this->observer->setComment($comment);
    }
}