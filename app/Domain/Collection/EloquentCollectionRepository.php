<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;
use FabDB\Library\EloquentRepository;
use Illuminate\Database\Eloquent\Model;

class EloquentCollectionRepository extends EloquentRepository implements CollectionRepository
{
    protected function model(): Model
    {
        return new OwnedCard;
    }

    public function add(int $cardId, int $userId, CardType $type)
    {
        $ownedCard = $this->newQuery()->whereCardId($cardId)->whereUserId($userId)->first();

        $field = $type->name();

        if (!$ownedCard) {
            $ownedCard = new OwnedCard;
            $ownedCard->card_id = $cardId;
            $ownedCard->user_id = $userId;
            $ownedCard->$field = 0;
        }

        $ownedCard->{$field}++;

        $ownedCard->save();

        return $ownedCard;
    }

    public function remove(int $cardId, int $userId, CardType $type)
    {
        $ownedCard = $this->newQuery()->whereCardId($cardId)->whereUserId($userId)->first();

        $field = $type->name();

        if ($ownedCard) {
            if ($ownedCard->$field) {
                $ownedCard->{$field}--;
                $ownedCard->save();
            }
            else {
                if ($ownedCard->hasNone()) {
                    $ownedCard->delete();
                }
            }
        }
    }
}
