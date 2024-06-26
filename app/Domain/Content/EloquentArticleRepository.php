<?php
namespace FabDB\Domain\Content;

use Carbon\Carbon;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Arr;

class EloquentArticleRepository extends EloquentRepository implements ArticleRepository
{
    protected function model(): Model
    {
        return new Article;
    }

    public function view($slug): Article
    {
        return $this->newQuery()
            ->with('author')
            ->whereSlug($slug)
            ->firstOrFail();
    }

    public function search(array $params, string $useCase, int $userId = null)
    {
        $keywords = Arr::get($params,'keywords');
        $perPage = Arr::get($params,'per_page');
        $type = Arr::get($params,'type', 'article');
        $tag = Arr::get($params,'tag');
        $author = Arr::get($params,'author');

        $query = $this->newQuery()
            ->with('author')
            ->select('id', 'slug', 'user_id', 'title', 'tags', 'image', 'excerpt', 'status', 'publish_at', 'created_at');

        // If we're managing articles, there's no need to restrict the type, as we want to see all of them.
        if ($useCase != 'manage') {
            $query->whereType($type);
        }

        if ($userId) {
            $query->where('user_id', $userId);
        }

        if ($type == 'spoiler') {
            $query->addSelect('content');
        }

        if ($tag) {
            $query->where('tags', 'like', '%'.$tag.'%');
        }

        if ($author) {
            $query->whereHas('author', function($query) use ($author) {
                $query->whereSlug($author);
            });
        }

        if ($keywords) {
            $query->where(function($clause) use ($keywords) {
                $keywords = explode(' ', $keywords);

                foreach ($keywords as $keyword) {
                    $clause->orWhere('title', 'LIKE', '%'.addslashes($keyword).'%');
                }
            });
        }

        // If we're looking at a specific user, let's order by created at.
        // Otherwise, this is public, so we want to order by most recently published.
        if ($useCase == 'search') {
            $query->where('publish_at', '<=', \DB::raw('NOW()'));
            $query->whereStatus('approved');
            $query->orderBy('publish_at', 'desc');
        } else {
            $query->orderBy('created_at', 'desc');
        }

        return $query->paginate($perPage);
    }

    public function upcoming(array $params)
    {
        return $this->newQuery()
            ->select('title', 'publish_at')
            ->where('publish_at', '>', \DB::raw('NOW()'))
            ->whereStatus('approved')
            ->whereType(Arr::get($params, 'type', 'article'))
            ->get();
    }

    public function nextOrPrev(string $nextOrPrev, Carbon $publishedAt)
    {
        $operator = $nextOrPrev == 'next' ? '>' : '<';

        return $this->newQuery()
            ->where('status', 'approved')
            ->where('publish_at', $operator, $publishedAt->toDateTimeString())
            ->where('publish_at', '<', now())
            ->orderBy('publish_at', $nextOrPrev == 'next' ? 'asc' : 'desc')
            ->first();
    }

    public function uniqueTags()
    {
        $articles = $this->newQuery()
            ->select('tags')
            ->whereNotNull('publish_at')
            ->whereStatus('approved')
            ->whereNotNull('tags')
            ->get();

        $tags = $articles->map(function($article) {
            return explode(',', $article->tags);
        })->flatten()->unique()->toArray();

        sort($tags);

        return $tags;
    }
}
