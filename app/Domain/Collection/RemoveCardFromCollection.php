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
    private $printingId;

    /**
     * @var int
     */
    private $userId;

    /**
     * @var int
     */
    private $total;

    public function __construct(int $printingId, int $userId, int $total)
    {
        $this->printingId = $printingId;
        $this->userId = $userId;
        $this->total = $total;
    }

    public function handle(CollectionRepository $collection)
    {
        return $collection->remove($this->printingId, $this->userId, $this->total);
    }
}
