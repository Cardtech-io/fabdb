<?php
namespace FabDB\Domain\Comments;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Content\Article;
use FabDB\Domain\Decks\Deck;
use FabDB\Library\Typeable;

class CommentableType extends Typeable
{
    protected static function typeMap(): array
    {
        return [
            'article' => Article::class,
            'card' => Card::class,
            'deck' => Deck::class,
        ];
    }
}
