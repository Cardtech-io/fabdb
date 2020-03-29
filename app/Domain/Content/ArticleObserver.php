<?php
namespace FabDB\Domain\Content;

class ArticleObserver
{
    private $article;

    public function saved(Article $article)
    {
        $this->article = $article;
    }

    public function article(): Article
    {
        return $this->article;
    }
}