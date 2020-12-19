<?php
namespace FabDB\Library\Casts;

use FabDB\Domain\Cards\Rarity;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

class CastsRarity implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return new Rarity($value);
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if (!$value instanceof Rarity) {
            throw new InvalidArgumentException('The provided value is not an instance of Rarity.');
        }

        return $value->raw();
    }
}
