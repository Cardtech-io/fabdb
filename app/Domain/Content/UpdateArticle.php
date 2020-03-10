<?php
namespace FabDB\Domain\Content;

use FabDB\Library\Dispatchable;

class UpdateArticle
{
    use Dispatchable;

    /**
     * @var string
     */
    private $slug;

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
    private $image;
    private $publishAt;
    private $status;

    public function __construct(string $slug, string $title, string $excerpt, $image, $publishAt, $status, string $content)
    {
        $this->slug = $slug;
        $this->title = $title;
        $this->excerpt = $excerpt;
        $this->content = $content;
        $this->image = $image;
        $this->publishAt = $publishAt;
        $this->status = $status;
    }

    public function handle(ArticleRepository $articles)
    {
        $article = $articles->bySlug($this->slug);

        $article->title = $this->title;
        $article->excerpt = $this->excerpt;
        $article->content = $this->content;
        $article->image = $this->image;
        $article->publishAt = $this->publishAt;
        $article->status = $this->status;

        $articles->save($article);

        $this->dispatchAll($article->releaseEvents());
    }
}
