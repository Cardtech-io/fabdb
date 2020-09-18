<?php

namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;

class UpdateCardInCollection
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

    /**
     * @var int
     */
    private $total;

    public function __construct(int $cardId, int $userId, CardType $type, int $total)
    {
        $this->cardId = $cardId;
        $this->userId = $userId;
        $this->type = $type;
        $this->total = $total;
    }

    public function handle(CollectionRepository $collection)
    {
        if ($this->total === 0) {
            $collection->remove($this->cardId, $this->userId, $this->type, $this->total);
        } else {
            return $collection->update($this->cardId, $this->userId, $this->type, $this->total);
        }
    }
}
