<?php
namespace FabDB\Domain\Content;

class ArticleWasDrafted
{
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

    public function __construct(int $author, string $title, string $excerpt, string $content)
    {
        $this->author = $author;
        $this->title = $title;
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

    public function excerpt(): string
    {
        return $this->excerpt;
    }

    public function content(): string
    {
        return $this->content;
    }
}
