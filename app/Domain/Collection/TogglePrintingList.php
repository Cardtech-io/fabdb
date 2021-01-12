<?php
namespace FabDB\Domain\Collection;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class TogglePrintingList implements Loggable
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
     * @var string
     */
    private $type;

    /**
     * @var int
     */
    private $cardId;

    public function __construct(int $cardId, int $printingId, int $userId, string $type)
    {
        $this->printingId = $printingId;
        $this->userId = $userId;
        $this->type = $type;
        $this->cardId = $cardId;
    }

    public function handle(CollectionRepository $ownedCards)
    {
        $ownedCards->toggleList($this->cardId, $this->printingId, $this->userId, $this->type);
    }
}
