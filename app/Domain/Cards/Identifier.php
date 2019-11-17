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
        $this->id = $id;
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
        return ['set' => $this->set, 'id' => $this->id];
    }
}
