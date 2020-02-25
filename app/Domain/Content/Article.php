<?php
namespace FabDB\Domain\Content;

use FabDB\Domain\Comments\Comment;
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

    public static function draft(int $author, string $title, string $excerpt, string $content)
    {
        $article = new self;
        $article->userId = $author;
        $article->title = $title;
        $article->excerpt = $excerpt;
        $article->content = $content;

        $article->raise(new ArticleWasDrafted($author, $title, $excerpt, $content));

        return $article;
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
