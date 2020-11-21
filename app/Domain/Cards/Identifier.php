<?php
namespace FabDB\Domain\Cards;

final class Identifier implements \JsonSerializable
{
    const PATTERN = '/^([a-z]{3,4})([0-9]{3})$/i';

    /**
     * @var string
     */
    private $set;

    /**
     * @var string
     */
    private $id;

    private function __construct(string $set, string $id)
    {
        $this->set = $set;
        $this->id = str_pad($id, 3, 0, STR_PAD_LEFT);
    }

    public static function fromString(string $identifier)
    {
        $matches = self::matches($identifier);

        return new self($matches[0], $matches[1]);
    }

    public static function fromStringAsUnlimited($identifier)
    {
        $identifier = 'U'.$identifier;

        return self::fromString($identifier);
    }

    /**
     * Returns the matched array minus the full match if the provided string matches a valid identifier.
     *
     * @param string $candidate
     * @return array
     */
    public static function matches(string $candidate): array
    {
        preg_match(self::PATTERN, $candidate, $matches);

        return array_slice($matches, 1);
    }

    public function set(): string
    {
        return $this->set;
    }

    public function id(): string
    {
        return $this->id;
    }

    /**
     * Stripped ID removes any padded zeroes.
     *
     * @return string
     */
    public function strippedId(): string
    {
        return preg_replace('/^0{1,2}/', '', $this->id);
    }

    // Variants can have an identifier somewhere within the string, so find it and then instantiate
    public static function fromVariant($string)
    {
        if (!self::matches($string)) {
            throw new InvalidIdentifier($string);
        }

        return self::fromString($string);
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
