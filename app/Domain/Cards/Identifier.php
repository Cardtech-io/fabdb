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

    public function set(): string
    {
        return $this->set;
    }

    public function strippedId(): string
    {
        return preg_replace('/^0{1,2}/', '', $this->id);
    }

    // Variants can have an identifier somewhere within the string, so find it and then instantiate
    public static function fromVariant($string)
    {
        if (!preg_match('/[a-z]{3}[0-9]{3}/i', $string, $matches)) {
            throw new InvalidIdentifier;
        }

        return static::fromString($matches[0]);
    }

    public function __toString(): string
    {
        return $this->raw();
    }

    public function raw()
    {
        return $this->set.$this->id;
    }

    function jsonSerialize()
    {
        return (string) $this;
    }
}
