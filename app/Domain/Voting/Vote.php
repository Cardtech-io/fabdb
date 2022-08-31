<?php
namespace FabDB\Domain\Voting;

use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Vote extends Model
{
    use Raiseable;
    use Sluggable;

    protected $fillable = ['user_id', 'voteable_type', 'voteable_id', 'direction', 'value'];

    public function voteable()
    {
        return $this->morphTo();
    }
}
