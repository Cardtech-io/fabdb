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

        $query = $this->newQuery()
            ->with('author')
            ->select('id', 'slug', 'user_id', 'title', 'image', 'excerpt', 'status', 'publish_at', 'created_at')
            ->whereType($type);

        if ($userId) {
            $query->where('user_id', $userId);
        }

        if ($type == 'spoiler') {
            $query->addSelect('content');
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
}
