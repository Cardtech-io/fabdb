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

    public function __construct(string $slug, string $title, string $excerpt, string $content)
    {
        $this->slug = $slug;
        $this->title = $title;
        $this->excerpt = $excerpt;
        $this->content = $content;
    }

    public function handle(ArticleRepository $articles)
    {
        $article = $articles->bySlug($this->slug);

        $article->title = $this->title;
        $article->excerpt = $this->excerpt;
        $article->content = $this->content;

        $articles->save($article);

        $this->dispatchAll($article->releaseEvents());
    }
}
