<?php
namespace FabDB\Library\Casts;

use FabDB\Domain\Cards\Sku;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

class CastsSku implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return new Sku($value);
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if (!$value instanceof Sku) {
            throw new InvalidArgumentException('The provided value is not an instance of Sku.');
        }

        return $value->raw();
    }
}
