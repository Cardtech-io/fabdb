<?php
namespace FabDB\Domain\Collection;

class RemoveCardFromCollection
{
    /**
     * @var int
     */
    private $cardId;

    /**
     * @var int
     */
    private $userId;

    public function __construct(int $cardId, int $userId)
    {
        $this->cardId = $cardId;
        $this->userId = $userId;
    }

    public function handle(CollectionRepository $collection)
    {
        return $collection->remove($this->cardId, $this->userId);
    }
}