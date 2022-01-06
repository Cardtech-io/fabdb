<?php
namespace FabDB\Library\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class CastsStats implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return array_map(fn($v) => (int) $v, json_decode($value, true));
    }

    public function set($model, string $key, $value, array $attributes)
    {
        $model[$key] = json_encode($value);
    }
}
