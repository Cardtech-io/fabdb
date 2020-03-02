<?php
namespace FabDB\Domain\Content;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

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

    public function search($keywords, int $perPage, string $useCase, int $userId = null)
    {

        $query = $this->newQuery()
            ->with('author')
            ->select('id', 'slug', 'user_id', 'title', 'image', 'excerpt', 'status', 'publish_at', 'created_at');

        if ($userId) {
            $query->where('user_id', $userId);
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
            $query->whereNotNull('publish_at');
            $query->orderBy('publish_at', 'desc');
        } else {
            $query->orderBy('created_at', 'desc');
        }

        return $query->paginate($perPage);
    }
}
