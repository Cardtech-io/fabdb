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
        return $this->raw();
    }

    public function raw(): string
    {
        return $this->rarity;
    }

    public static function fromLss($rarity)
    {
        $map = [
            'Common' => 'C',
            'Rare' => 'R',
            'Super Rare' => 'S',
            'Majestic' => 'M',
            'Legendary' => 'L',
            'Fabled' => 'F',
            'Token' => 'T',
            'Promo' => 'P',
        ];

        return new self($map[$rarity]);
    }

    function jsonSerialize()
    {
        return (string) $this;
    }
}
