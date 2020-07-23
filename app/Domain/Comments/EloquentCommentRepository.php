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

    public function get(CommentableType $type, int $foreignId)
    {
        return $this->newQuery()
            ->select('comments.*')
            ->withVotes()
            ->with(['user' => function($with) {
                $with->select('users.id', 'users.subscription', 'users.name', 'users.slug', 'users.avatar');
            }])
            ->whereCommentableType($type)
            ->whereCommentableId($foreignId)
            ->limit(10)
            ->get();
    }
}
