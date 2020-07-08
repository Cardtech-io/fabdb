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
    public function view(ArticleRepository $articles, Article $article)
    {
        $response = [
            'article' => $article
        ];

        if ($article->ready()) {
            $response['next'] = $articles->nextOrPrev('next', $article->publishAt);
            $response['prev'] = $articles->nextOrPrev('prev', $article->publishAt);
        }

        return $response;
    }

    public function search(Request $request, ArticleRepository $articles)
    {
        return $articles->search(
            $request->get('keywords'),
            $request->get('per_page', 10),
            'search'
        );
    }

    public function draft(DraftArticleRequest $request)
    {
        $this->dispatchNow(new DraftArticle(
            $observer = new ArticleObserver,
            $request->user()->id,
            $request->get('title'),
            $request->get('excerpt'),
            $request->get('image'),
            $request->get('publishAt'),
            $request->get('status', 'draft'),
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
            $request->get('image'),
            $request->get('publishAt'),
            $request->get('status'),
            $request->get('content')
        ));
    }

    public function mine(Request $request, ArticleRepository $articles)
    {
        $userId = $request->user()->role == 'editor' ? null : $request->user()->id;

        return $articles->search(
            $request->get('keywords'),
            $request->get('per_page', 12),
            'manage',
            $userId
        );
    }
}
