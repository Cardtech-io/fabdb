<?php
namespace FabDB\Library\Casts;

use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Set;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

class CastsSet implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return new Set($value);
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if (!$value instanceof Set) {
            throw new InvalidArgumentException('The provided value is not an instance of Set.');
        }

        return $value->raw();
    }
}
