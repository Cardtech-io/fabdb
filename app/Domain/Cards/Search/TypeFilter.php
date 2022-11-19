<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class TypeFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return Arr::get($input, 'cardType');
    }

    public function applyTo(Builder $query, array $input)
    {
        $types = $this->cardTypes($input['cardType']);

        $query->where(function($query) use ($types) {
            for ($i = 0; $i < count($types); $i++) {
                switch ($types[$i]) {
                    case 'attack action':
                        $query->orWhere(function($query) {
                            $query->where('cards.type', 'action');
                            $query->whereJsonContains('cards.sub_types', 'attack');
                        });
                        break;
                    case 'item':
                        $query->orWhereJsonContains('cards.sub_types', 'item');
                        break;
                    case 'non-attack action':
                        $query->orWhere(function($query) {
                            $query->where('cards.type', 'action');
                            $query->where(function($query) {
                                $query->whereNull('cards.sub_type');
                                $query->whereJsonNotContains('cards.sub_types', 'attack');
                            });
                        });
                        break;
                    default:
                        $query->orWhere('cards.type', $types[$i]);

                        break;
                }
            }
        });
    }

    /**
     * Fetches and filters types to ensure no invalid/empty type values are provided.
     */
    private function cardTypes($cardType)
    {
        $types = !is_array($cardType) ? explode(',', $cardType) : $cardType;

        return array_filter($types);
    }
}
