<?php
namespace FabDB\Library\Casts;

use FabDB\Domain\Cards\Identifier;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

class CastsIdentifier implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return Identifier::fromString($value);
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if (!$value instanceof Identifier) {
            throw new InvalidArgumentException('The provided value is not an instance of Identifier.');
        }

        return $value->raw();
    }
}
