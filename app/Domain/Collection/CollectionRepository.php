<?php
namespace FabDB\Domain\Collection;

interface CollectionRepository
{
    public function add(int $cardId, int $printingId, int $userId, int $total);

    public function update(int $cardId, int $printingId, int $userId, int $total);

    public function remove(int $printingId, int $userId, int $total);

    /**
     * Toggles trade/buy list for a given printing for a user.
     *
     * @param int $cardId
     * @param int $printingId
     * @param int $userId
     * @param string $type trade/want
     * @return mixed
     */
    public function toggleList(int $cardId, int $printingId, int $userId, string $type);
}
