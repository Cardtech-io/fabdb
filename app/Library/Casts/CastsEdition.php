<?php
namespace FabDB\Library\Casts;

use FabDB\Domain\Cards\Edition;
use FabDB\Domain\Cards\Sku;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

class CastsEdition implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return new Edition($value);
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if (!$value instanceof Edition) {
            throw new InvalidArgumentException('The provided value is not an instance of Sku.');
        }

        return $value->raw();
    }
}
