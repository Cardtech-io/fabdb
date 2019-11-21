<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;

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

    /**
     * @var CardType
     */
    private $cardType;

    public function __construct(int $cardId, int $userId, CardType $cardType)
    {
        $this->cardId = $cardId;
        $this->userId = $userId;
        $this->cardType = $cardType;
    }

    public function handle(CollectionRepository $collection)
    {
        return $collection->remove($this->cardId, $this->userId, $this->cardType);
    }
}