<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Content\Article;

class ArticleController extends Controller
{
    public function view(Article $article)
    {
        return $article;
    }
}
