<?php
namespace FabDB\Domain\Practise;

use FabDB\Library\Model;
use FabDB\Library\Raiseable;

class Pack extends Model
{
    use Raiseable;

    public static function forPractise(int $practiseId, array $cardIds)
    {
        $pack = new self;
        $pack->practiseId = $practiseId;
        $pack->cards = $cardIds;

        $pack->raise(new PackWasGenerated($practiseId, $cardIds));

        return $pack;
    }
}
