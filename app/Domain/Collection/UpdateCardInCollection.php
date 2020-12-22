<?php

namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;

class UpdateCardInCollection
{
    /**
     * @var int
     */
    private $userId;

    /**
     * @var int
     */
    private $total;

    /**
     * @var int
     */
    private $printingId;

    public function __construct(int $printingId, int $userId, int $total)
    {
        $this->printingId = $printingId;
        $this->userId = $userId;
        $this->total = $total;
    }

    public function handle(CollectionRepository $collection)
    {
        if ($this->total === 0) {
            $collection->remove($this->printingId, $this->userId, $this->total);
        } else {
            return $collection->update($this->printingId, $this->userId, $this->total);
        }
    }
}
