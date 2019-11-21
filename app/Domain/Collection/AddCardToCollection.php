<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;

class AddCardToCollection
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
    private $type;

    public function __construct(int $cardId, int $userId, CardType $type)
    {
        $this->cardId = $cardId;
        $this->userId = $userId;
        $this->type = $type;
    }

    public function handle(CollectionRepository $collection)
    {
        return $collection->add($this->cardId, $this->userId, $this->type);
    }
}
