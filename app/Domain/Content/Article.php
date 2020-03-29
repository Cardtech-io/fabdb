<?php
namespace FabDB\Domain\Content;

use FabDB\Domain\Comments\Comment;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Article extends Model
{
    use Raiseable;
    use Sluggable;

    protected $casts = [
        'publish_at' => 'datetime'
    ];

    protected $hidden = [
        'id',
        'userId'
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public static function draft(int $author, string $title, string $excerpt, $image, $publishAt, $status, string $content)
    {
        $article = new self;
        $article->userId = $author;
        $article->title = $title;
        $article->excerpt = $excerpt;
        $article->image = $image;
        $article->publishAt = $publishAt;
        $article->status = $status;
        $article->content = $content;

        $article->raise(new ArticleWasDrafted($author, $title, $excerpt, $content));

        return $article;
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
