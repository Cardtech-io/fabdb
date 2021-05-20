<?php
namespace FabDB\Domain\Practise;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class PackWasGenerated implements Loggable
{
    use LogsParams;

    private $practiseId;
    private $cardIds;

    public function __construct(int $practiseId, array $cardIds)
    {
        $this->practiseId = $practiseId;
        $this->cardIds = $cardIds;
    }

    public function practiseId(): int
    {
        return $this->practiseId;
    }

    public function cardIds(): array
    {
        return $this->cardIds;
    }
}
