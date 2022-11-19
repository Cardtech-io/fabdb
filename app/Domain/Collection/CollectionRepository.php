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

    /**
     * Retrieves a paginated list of trade or want lists for the given user.
     *
     * @param string $view
     * @param int $userId
     * @return mixed
     */
    public function lists(string $view, int $userId);

    /**
     * Returns the total value of the user's collection in cents.
     *
     * @param mixed $user
     */
    public function totalValue(mixed $user);
}
