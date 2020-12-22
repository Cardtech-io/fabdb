<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class Identifier implements \JsonSerializable
{
    /**
     * @var string
     */
    protected $identifier;

    private function __construct(string $identifier)
    {
        $this->identifier = $identifier;
    }

    public static function fromName(string $name)
    {
        return new self(Str::slug($name));
    }

    public static function generate(string $name, array $stats)
    {
        $name = static::stripColour($name);

        if (Arr::has($stats, 'resource') && is_numeric($stats['resource']) && $stats['resource'] > 0) {
            $name .= '-' . self::resourceName((int)$stats['resource']);
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

    /**
     * Returns true if the string in question is "coloured", in that it mentions a colour in the title.
     *
     * @param string $name
     * @return bool
     */
    private static function coloured(string $name)
    {
        return Str::contains($name, ['(', ')']);
    }

    private static function stripColour(string $name)
    {
        if (!static::coloured($name)) {
            return $name;
        }

        return preg_replace('/\s+\([a-z]+\)$/i', '', $name);
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
        return $this->raw();
    }
}
