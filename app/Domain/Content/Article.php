<?php
namespace FabDB\Domain\Content;

use FabDB\Domain\Comments\Comment;
use FabDB\Domain\Users\User;
use FabDB\Domain\Voting\Vote;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;
use Illuminate\Support\Str;

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

    public static function draft(int $author, string $title, string $tags, string $excerpt, $image, $publishAt, $status, string $content)
    {
        $article = new self;
        $article->userId = $author;
        $article->title = $title;
        $article->tags = $tags;
        $article->excerpt = $excerpt;
        $article->image = $image;
        $article->publishAt = $publishAt;
        $article->status = $status;
        $article->content = $content;

        $article->raise(new ArticleWasDrafted($author, $title, $tags, $excerpt, $content));

        return $article;
    }

    public function ready()
    {
        return $this->status == 'approved' && $this->publishAt !== null;
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function votes()
    {
        return $this->morphMany(Vote::class, 'voteable');
    }

    public function setExcerptAttribute($excerpt)
    {
        $this->attributes['excerpt'] = substr($excerpt, 0, 255); // Make sure we crop it so we don't get issues with mysql
    }

    public function setTagsAttribute($tags)
    {
        $this->attributes['tags'] = Str::lower($tags);
    }
}
