<?php
namespace FabDB\Domain\Comments;

class PostCommentObserver
{
    /**
     * @var Comment
     */
    private $comment;

    /**
     * @param Comment $comment
     */
    public function setComment(Comment $comment)
    {
        $comment->load('user');

        $this->comment = $comment;
    }

    public function comment()
    {
        return $this->comment;
    }
}
