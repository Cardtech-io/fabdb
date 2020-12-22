<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\CardType;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class AddCardToCollection implements Loggable
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
    private $type;

    /**
     * @var int
     */
    private $total;

    /**
     * @var int
     */
    private $printingId;

    public function __construct(int $cardId, int $printingId, int $userId, int $total)
    {
        $this->cardId = $cardId;
        $this->printingId = $printingId;
        $this->userId = $userId;
        $this->total = $total;
    }

    public function handle(CollectionRepository $collection)
    {
        return $collection->add($this->cardId, $this->printingId, $this->userId, $this->total);
    }
}
