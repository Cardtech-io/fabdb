<?php
namespace FabDB\Domain\Voting;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Comments\Comment;
use FabDB\Domain\Content\Article;
use FabDB\Domain\Decks\Deck;
use FabDB\Library\Typeable;

class VoteableType extends Typeable
{
    protected static function typeMap(): array
    {
        return [
            'article' => Article::class,
            'card' => Card::class,
            'comment' => Comment::class,
            'deck' => Deck::class,
        ];
    }
}
