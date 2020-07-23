<?php
namespace FabDB\Library;

use Webmozart\Assert\Assert;

abstract class Typeable
{
    /**
     * @var string
     */
    private $type;

    private function __construct(string $type)
    {
        Assert::oneOf($type, $this->typeMap());

        $this->type = $type;
    }

    public static function fromRaw(string $type)
    {
        return new static(static::typeMap()[$type]);
    }

    public function __toString()
    {
        return $this->type;
    }

    abstract protected static function typeMap(): array;
}
