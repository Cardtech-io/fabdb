<?php
namespace FabDB\Domain\Comments;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Content\Article;
use FabDB\Domain\Decks\Deck;
use Webmozart\Assert\Assert;

class CommentableType
{
    private static $typeMap = [
        'article' => Article::class,
        'card' => Card::class,
        'deck' => Deck::class,
    ];

    /**
     * @var string
     */
    private $type;

    private function __construct(string $type)
    {
        Assert::oneOf($type, self::$typeMap);

        $this->type = $type;
    }

    public static function fromRaw(string $type)
    {
        return new self(self::$typeMap[$type]);
    }

    public function __toString()
    {
        return $this->type;
    }
}
