<?php
namespace FabDB\Domain\Voting;

use Eloquence\Database\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Vote extends Model
{
    use Raiseable;
    use Sluggable;
}
