<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use function Symfony\Component\String\s;

class SyntaxFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['keywords']) && !empty($input['keywords']) && $this->isProgrammatic($input['keywords']);
    }

    public function applyTo(Builder $query, array $input)
    {
        foreach ($this->filter($input['keywords']) as $terms) {
            $this->apply($query, $terms);
        }
    }

    /**
     * Determines whether or not a user is using programmatic keywords (scryfall-like).
     *
     * @param string $keywords
     * @return bool
     */
    private function isProgrammatic(string $keywords): bool
    {
        return Str::contains($keywords, ':');
    }

    private function filter(string $keywords): array
    {
        $keywords = preg_split('/\s(?=([^"]*"[^"]*")*[^"]*$)/', $keywords);

        return array_filter($keywords, function($keyword) {
            return Str::contains($keyword, [':']);
        });
    }

    private function apply(Builder $query, string $terms)
    {
        list($filter, $value) =  explode(':', $terms);

        $value = explode(' ', str_replace('"', '', $value));

        switch (strtolower($filter)) {
            // class
            case 'c':
                $query->whereRaw("JSON_SEARCH(cards.keywords, 'one', '$value[0]') IS NOT NULL");
                break;
            // Card type
            case 't':
                foreach ($value as $part) {
                    $query->whereRaw("JSON_SEARCH(cards.keywords, 'one', '$part') IS NOT NULL");
                }
                break;
            case 'r':
                $query->where('cards.rarity', $value);
                break;
            case 'p':
                $query->where("stats->resource", $value);
                break;
            case 'co':
                $query->where("stats->cost", $value);
        }
    }
}
