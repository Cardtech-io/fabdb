<?php
namespace FabDB\Domain\Content;

use FabDB\Library\Dispatchable;

class DraftArticle
{
    use Dispatchable;

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
     * @var ArticleObserver
     */
    private $observer;
    private $image;
    private $publishAt;
    private $status;

    public function __construct(ArticleObserver $observer, int $author, string $title, string $excerpt, $image, $publishAt, $status, string $content)
    {
        $this->observer = $observer;
        $this->author = $author;
        $this->title = $title;
        $this->excerpt = $excerpt;
        $this->content = $content;
        $this->image = $image;
        $this->publishAt = $publishAt;
        $this->status = $status;
    }

    public function handle(ArticleRepository $articles)
    {
        $article = Article::draft(
            $this->author,
            $this->title,
            $this->excerpt,
            $this->image,
            $this->publishAt,
            $this->status,
            $this->content
        );

        $articles->save($article);

        $this->observer->saved($article);

        $this->dispatchAll($article->releaseEvents());
    }
}
