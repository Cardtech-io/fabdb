<?php
namespace FabDB\Domain\Content;

use FabDB\Library\Model;

class Feature extends Model
{
    /**
     * Get the owning featureable model.
     */
    public function featureable()
    {
        return $this->morphTo();
    }
}
