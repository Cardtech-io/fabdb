<?php
namespace FabDB\Domain\Clicks;

class RegisterClick
{
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

    public function __construct(int $clickableId, string $clickableType, string $url)
    {
        $this->clickableId = $clickableId;
        $this->clickableType = $clickableType;
        $this->url = $url;
    }

    public function handle()
    {
        Click::register($this->clickableId, $this->clickableType, $this->url);
    }
}
