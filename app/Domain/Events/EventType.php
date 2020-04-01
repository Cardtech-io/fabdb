<?php
namespace FabDB\Domain\Events;

use Webmozart\Assert\Assert;

class EventType
{
    /**
     * @var string
     */
    private $mode;

    public function __construct(string $mode)
    {
        Assert::oneOf($mode, ['constructed', 'draft', 'sealed']);

        $this->mode = $mode;
    }

    public function __toString(): string
    {
        return $this->mode;
    }
}