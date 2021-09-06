<?php
namespace FabDB\Domain\Cards;

use Eloquence\Behaviours\Sluggable;
use FabDB\Library\Model;

class Artist extends Model
{
    use Sluggable;



    public function cards()
    {
        return $this->hasMany(Card::class);
    }

    public function slugStrategy()
    {
        return 'name';
    }
}
