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

    /**
     * @var string
     */
    private $from;

    /**
     * @var string
     */
    private $fromType;

    public function __construct(int $clickableId, string $clickableType, string $url, $ipAddress, string $from, string $fromType)
    {
        $this->clickableId = $clickableId;
        $this->clickableType = $clickableType;
        $this->url = $url;
        $this->ipAddress = $ipAddress;
        $this->from = $from;
        $this->fromType = $fromType;
    }

    public function handle()
    {
        Click::register(
            $this->clickableId,
            $this->clickableType,
            $this->url,
            $this->ipAddress,
            $this->from,
            $this->fromType
        );
    }
}
