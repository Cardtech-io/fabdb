<?php
namespace FabDB\Domain\Content;

use FabDB\Domain\Comments\Comment;
use FabDB\Library\Model;

class Article extends Model
{
    protected $casts = [
        'publish_at' => 'datetime'
    ];

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
