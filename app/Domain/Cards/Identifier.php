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

    public static function fromLSS(array $data)
    {
        $name = $data['Card Name'];

        // strip the left/right
        if (Str::endsWith($name, ['(Left)', '(Right)'])) {
            $name = preg_replace('/ \((Left|Right)\)/', '', $name);
        }

        if (!self::coloured($name) && in_array($data['Rarity'], ['Common', 'Rare']) && is_numeric($data['Pitch Value'])) {
            $name = $name.' ('.self::resourceName($data['Pitch Value']).')';
        }

        return self::fromName($name);
    }

    public static function fromString(string $identifier)
    {
        return new self($identifier);
    }

    public static function resourceName(int $resource)
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
