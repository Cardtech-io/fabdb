<?php
namespace FabDB\Domain\Cards;

use Webmozart\Assert\Assert;

final class Rarity implements \JsonSerializable
{
    /**
     * @var string
     */
    private $rarity;

    public function __construct(string $rarity)
    {
        Assert::oneOf($rarity, ['C', 'R', 'S', 'M', 'L', 'F', 'T', 'P']);

        $this->rarity = $rarity;
    }

    public function __toString(): string
    {
        return $this->rarity;
    }

    function jsonSerialize()
    {
        return (string) $this;
    }
}
