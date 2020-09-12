<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class NameWasUpdated implements Loggable
{
    use LogsParams;

    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    public function __construct(int $id, string $name)
    {
        $this->id = $id;
        $this->name = $name;
    }

    public function id(): int
    {
        return $this->id;
    }

    public function name(): string
    {
        return $this->name;
    }
}
