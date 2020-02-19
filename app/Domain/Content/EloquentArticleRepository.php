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
            ->whereSlug($slug)
            ->where('status', 'approved')
            ->where('publish_at', '<=', DB::raw('NOW()'))
            ->firstOrFail();
    }
}
