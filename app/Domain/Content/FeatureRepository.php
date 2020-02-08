<?php
namespace FabDB\Domain\Content;

use FabDB\Library\Repository;

interface FeatureRepository extends Repository
{
    /**
     * Returns the top featured content.
     *
     * @return Feature|null
     */
    public function top();
}
