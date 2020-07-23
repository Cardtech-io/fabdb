<?php
namespace FabDB\Domain\Comments;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Users\User;
use FabDB\Domain\Voting\Vote;
use FabDB\Domain\Voting\Voteable;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Comment extends Model
{
    use Raiseable;
    use Sluggable;
    use Voteable;

    protected $hidden = ['id', 'userId', 'commentableType', 'commentableId'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function votes()
    {
        return $this->morphMany(Vote::class, 'voteable');
    }

    public static function post(CommentableType $type, int $foreignId, int $userId, string $content)
    {
        $comment = new Comment;
        $comment->commentableType = $type;
        $comment->commentableId = $foreignId;
        $comment->userId = $userId;
        $comment->content = $content;

        $comment->raise(new CommentWasPosted($type, $foreignId, $userId, $content));

        return $comment;
    }
}
