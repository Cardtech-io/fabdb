<?php
namespace FabDB\Domain\Content;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class ArticleWasDrafted implements Loggable
{
    use LogsParams;

    /**
     * @var int
     */
    private $author;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string
     */
    private $excerpt;

    /**
     * @var string
     */
    private $content;

    /**
     * @var string
     */
    private $tags;

    public function __construct(int $author, string $title, string $tags, string $excerpt, string $content)
    {
        $this->author = $author;
        $this->title = $title;
        $this->tags = $tags;
        $this->excerpt = $excerpt;
        $this->content = $content;
    }

    public function author(): int
    {
        return $this->author;
    }

    public function title(): string
    {
        return $this->title;
    }

    public function tags(): string
    {
        return $this->tags;
    }

    public function excerpt(): string
    {
        return $this->excerpt;
    }

    public function content(): string
    {
        return $this->content;
    }
}
