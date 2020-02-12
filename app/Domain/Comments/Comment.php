<?php
namespace FabDB\Domain\Comments;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Comment extends Model
{
    use Raiseable;
    use Sluggable;

    protected $hidden = ['id', 'userId', 'commentableType', 'commentableId'];

    static $typeMap = [
        'card' => Card::class,
        'deck' => Deck::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function post(string $type, int $foreignId, int $userId, string $content)
    {
        $commentableType = static::$typeMap[$type];

        $comment = new Comment;
        $comment->commentableType = $commentableType;
        $comment->commentableId = $foreignId;
        $comment->userId = $userId;
        $comment->content = $content;

        $comment->raise(new CommentWasPosted($commentableType, $foreignId, $userId, $content));

        return $comment;
    }
}