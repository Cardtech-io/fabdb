<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentCollectionRepository extends EloquentRepository implements CollectionRepository
{
    protected function model(): Model
    {
        return new OwnedCard;
    }

    public function add(int $cardId, int $printingId, int $userId, int $total)
    {
        $ownedCard = $this->newQuery()
            ->whereCardId($cardId)
            ->wherePrintingId($printingId)
            ->whereUserId($userId)
            ->first();

        if (!$ownedCard) {
            $ownedCard = new OwnedCard;
            $ownedCard->cardId = $cardId;
            $ownedCard->printingId = $printingId;
            $ownedCard->userId = $userId;
        }

        $ownedCard->total += $total;
        $ownedCard->save();

        return $ownedCard;
    }

    public function remove(int $printingId, int $userId, int $total)
    {
        $ownedCard = $this->newQuery()
            ->wherePrintingId($printingId)
            ->whereUserId($userId)
            ->first();

        if ($ownedCard) {
            $ownedCard->remove($total);
        }
    }

    public function update(int $cardId, int $printingId, int $userId, int $total)
    {
        $ownedCard = $this->newQuery()
            ->whereCardId($printingId)
            ->wherePrintingId($printingId)
            ->whereUserId($userId)
            ->first();

        if (!$ownedCard) {
            $ownedCard = new OwnedCard;
            $ownedCard->cardId = $cardId;
            $ownedCard->printingId = $printingId;
            $ownedCard->userId = $userId;
        }

        $ownedCard->total = $total;
        $ownedCard->save();

        return $ownedCard;
    }
}
