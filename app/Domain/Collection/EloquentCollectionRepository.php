<?php
namespace FabDB\Domain\Collection;

use FabDB\Library\EloquentRepository;
use Illuminate\Database\Eloquent\Model;

class EloquentCollectionRepository extends EloquentRepository implements CollectionRepository
{
    protected function model(): Model
    {
        return new OwnedCard;
    }

    public function add(int $cardId, int $userId)
    {
        $ownedCard = $this->newQuery()->whereCardId($cardId)->whereUserId($userId)->first();

        if (!$ownedCard) {
            $ownedCard = new OwnedCard;
            $ownedCard->cardId = $cardId;
            $ownedCard->userId = $userId;
            $ownedCard->total = 0;
        }

        $ownedCard->total++;

        $ownedCard->save();

        return $ownedCard;
    }

    public function remove(int $cardId, int $userId)
    {
        $ownedCard = $this->newQuery()->whereCardId($cardId)->whereUserId($userId)->first();

        if ($ownedCard) {
            if ($ownedCard->total > 1) {
                $ownedCard->total--;
                $ownedCard->save();
            }
            else {
                $ownedCard->delete();
            }
        }
    }
}
