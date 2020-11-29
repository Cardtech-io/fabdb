<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

final class Identifier implements \JsonSerializable
{
    /**
     * @var string
     */
    private $identifier;

    private function __construct(string $identifier)
    {
        $this->identifier = $identifier;
    }

    public static function fromName(string $name, array $stats)
    {
        if (Arr::has($stats, 'resource') && is_numeric($stats['resource'])) {
            $name .= '-'.self::resourceName((int) $stats['resource']);
        }

        return new self(Str::slug($name));
    }

    public static function fromString(string $identifier)
    {
        return new self($identifier);
    }

    private static function resourceName(int $resource)
    {
        $names = [1 => 'red', 'yellow', 'blue'];

        return $names[$resource];
    }

    public function __toString(): string
    {
        return $this->raw();
    }

    public function raw()
    {
        return $this->identifier;
    }

    function jsonSerialize()
    {
        return (string) $this;
    }
}
