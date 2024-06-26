<?php
namespace FabDB\Domain\Practise;

use Webmozart\Assert\Assert;

class Format implements \JsonSerializable
{
    private $format;

    public function __construct(string $format)
    {
        Assert::inArray($format, ['draft', 'sealed', 'team-sealed']);

        $this->format = $format;
    }

    public function raw(): string
    {
        return $this->format;
    }

    public function jsonSerialize()
    {
        return $this->raw();
    }
}
