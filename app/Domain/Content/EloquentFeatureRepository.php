<?php
namespace FabDB\Domain\Content;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

class EloquentFeatureRepository extends EloquentRepository implements FeatureRepository
{
    protected function model(): Model
    {
        return new Feature;
    }

    /**
     * Returns the top featured content.
     *
     * @return Feature|null
     */
    public function top()
    {
        return $this->newQuery()
            ->with('featureable')
            ->where(function($where) {
                $where->whereNull('publish_at');
                $where->orWhere('publish_at', '<=', DB::raw('NOW()'));
            })
            ->orderBy('created_at', 'desc')
            ->limit(1)
            ->first();
    }
}
