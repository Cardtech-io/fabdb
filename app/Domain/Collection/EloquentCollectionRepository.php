<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

class EloquentCollectionRepository extends EloquentRepository implements CollectionRepository
{
    protected function model(): Model
    {
        return new OwnedCard;
    }

    public function add(int $cardId, int $printingId, int $userId, int $total)
    {
        $ownedCard = $this->newQuery()
            ->wherePrintingId($printingId)
            ->whereUserId($userId)
            ->whereCardId($cardId)
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
            ->wherePrintingId($printingId)
            ->whereUserId($userId)
            ->whereCardId($cardId)
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

    public function toggleList(int $cardId, int $printingId, int $userId, string $type)
    {
        DB::transaction(function() use ($cardId, $userId, $printingId, $type) {
            $payload = [
                'printing_id' => $printingId,
                'user_id' => $userId,
                'card_id' => $cardId
            ];

            $ownedCard = OwnedCard::firstOrNew($payload, $payload);
            $ownedCard->toggle($type);

            $this->save($ownedCard);
        });
    }

    public function lists(string $view, int $userId)
    {
        return $this->newQuery()
            ->select('cards.id', 'cards.identifier', 'cards.image', 'cards.name', 'cards.rarity', 'printings.sku')
            ->join('printings', 'printings.id', 'owned_cards.printing_id')
            ->join('cards', 'cards.id', 'printings.card_id')
            ->whereNotNull('owned_cards.printing_id')
            ->where('owned_cards.user_id', $userId)
            ->where("owned_cards.$view", '>', 0)
            ->groupBy('owned_cards.printing_id');
    }
}
