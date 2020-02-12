<?php
namespace FabDB\Domain\Comments;

use FabDB\Providers\AppServiceProvider;

class CommentServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        CommentRepository::class => EloquentCommentRepository::class
    ];
}
