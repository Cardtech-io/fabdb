<?php
namespace FabDB\Domain\Clicks;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class RegisterClick implements Loggable
{
    use LogsParams;

    /**
     * @var int
     */
    private $clickableId;

    /**
     * @var string
     */
    private $clickableType;

    /**
     * @var string
     */
    private $url;

    /**
     * @var string|null
     */
    private $ipAddress;

    public function __construct(int $clickableId, string $clickableType, string $url, $ipAddress)
    {
        $this->clickableId = $clickableId;
        $this->clickableType = $clickableType;
        $this->url = $url;
        $this->ipAddress = $ipAddress;
    }

    public function handle()
    {
        Click::register($this->clickableId, $this->clickableType, $this->url, $this->ipAddress);
    }
}
