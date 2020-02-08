<?php
namespace FabDB\Domain\Content;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

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
            ->orderBy('created_at', 'desc')
            ->limit(1)
            ->first();
    }
}
