<?php
namespace FabDB\Library\Casts;

use FabDB\Domain\Practise\Format;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

class CastsFormat implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return new Format($value);
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if (!$value instanceof Format) {
            throw new InvalidArgumentException('The provided value is not an instance of Set.');
        }

        return $value->raw();
    }
}
