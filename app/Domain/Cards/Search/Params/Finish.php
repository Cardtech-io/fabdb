<?php

namespace FabDB\Domain\Cards\Search\Params;

use Illuminate\Support\Arr;

class Finish extends Param
{
    private const FINISHES = [
        'regular' => 'r',
        'rainbow' => 'rf',
        'rainbow foil' => 'rf',
        'cold' => 'cf',
        'cold foil' => 'cf',
        'gold' => 'gf',
        'gold foil' => 'gf',
        'golden' => 'gf',
        'marvel' => 'mv',
        'alternative' => 'aa',
        'alternative art' => 'aa',
        'extended' => 'ea',
        'extended art' =>' ea'
    ];

    public function handles(string $filter, ?string $operator): bool
    {
        return in_array($filter, ['f', 'finish']) && $operator != null;
    }

    public function applyTo($query, $operator, $value, bool $invert)
    {
        $finishes = $this->toArray($value);
        $method = $invert ? 'whereNot' : 'where';

        $query->{$method}(function($query) use ($finishes) {
            foreach ($finishes as $finish) {
                $value = Arr::has(self::FINISHES, $finish) ? $finish : array_search($finish, self::FINISHES);

                // It may still not be valid, so skip if not.
                if (!$value) continue;

                $query->orWhere('printings.finish', 'LIKE', "%$value%");
            }
        });
    }

    public function title(): string
    {
        return 'Finish';
    }
}
