<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class RemoveCardFromCollection implements Loggable
{
    use LogsParams;

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

    /**
     * @var int
     */
    private $total;

    public function __construct(int $cardId, int $userId, CardType $cardType, int $total)
    {
        $this->cardId = $cardId;
        $this->userId = $userId;
        $this->cardType = $cardType;
        $this->total = $total;
    }

    public function handle(CollectionRepository $collection)
    {
        return $collection->remove($this->cardId, $this->userId, $this->cardType, $this->total);
    }
}
