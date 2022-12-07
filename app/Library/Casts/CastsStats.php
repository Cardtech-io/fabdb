<?php
namespace FabDB\Library\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class CastsStats implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        if (!$value) return [];

        return array_map(fn($v) => (int) $v, json_decode($value, true));
    }

    public function set($model, string $key, $value, array $attributes)
    {
        return json_encode($value, JSON_NUMERIC_CHECK);
    }
}
