<?php
namespace FabDB\Domain\Cards;

final class Identifier implements \JsonSerializable
{
    /**
     * @var string
     */
    private $set;

    /**
     * @var string
     */
    private $id;

    public function __construct(string $set, string $id)
    {
        $this->set = $set;
        $this->id = str_pad($id, 3, 0, STR_PAD_LEFT);
    }

    public static function fromString(string $identifier)
    {
        [$set, $id] = str_split($identifier, 3);

        return new self($set, $id);
    }

    public function __toString(): string
    {
        return $this->set.$this->id;
    }

    function jsonSerialize()
    {
        return (string) $this;
    }
}
