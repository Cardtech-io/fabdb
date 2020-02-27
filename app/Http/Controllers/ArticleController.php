<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Content\Article;
use FabDB\Domain\Content\ArticleObserver;
use FabDB\Domain\Content\ArticleRepository;
use FabDB\Domain\Content\DraftArticle;
use FabDB\Domain\Content\UpdateArticle;
use FabDB\Http\Requests\DraftArticleRequest;
use FabDB\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function view(Article $article)
    {
        return $article;
    }

    public function draft(DraftArticleRequest $request)
    {
        $this->dispatchNow(new DraftArticle(
            $observer = new ArticleObserver,
            $request->user()->id,
            $request->get('title'),
            $request->get('excerpt'),
            $request->get('content')
        ));

        return $observer->article();
    }

    public function update(UpdateArticleRequest $request)
    {
        $this->dispatchNow(new UpdateArticle(
            $request->article->slug,
            $request->get('title'),
            $request->get('excerpt'),
            $request->get('content')
        ));
    }

    public function mine(Request $request, ArticleRepository $articles)
    {
        return $articles->search(
            $request->get('keywords'),
            $request->get('per_page', 12),
            $request->user()->id
        );
    }
}
