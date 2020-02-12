<?php
namespace FabDB\Domain\Comments;

use FabDB\Library\Repository;

interface CommentRepository extends Repository
{
    /**
     * Retrieve a number of comments for the given commentable type and id.
     *
     * @param CommentableType $type
     * @param int $foreignId
     * @return mixed
     */
    public function get(CommentableType $type, int $foreignId);
}
