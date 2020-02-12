<?php
namespace FabDB\Domain\Comments;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentCommentRepository extends EloquentRepository implements CommentRepository
{
    protected function model(): Model
    {
        return new Comment;
    }
}
