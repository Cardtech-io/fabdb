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
        return $this->newQuery()->whereSlug($slug)->firstOrFail();
    }

    public function search($keywords, int $perPage, int $userId = null)
    {
        $query = $this->newQuery();

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

        $query->whereNotNull('publish_at');

        $query->orderBy('publish_at', 'desc');

        return $query->paginate($perPage);
    }
}
