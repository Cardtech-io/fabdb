<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

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
        $keywords = explode(' ', $keywords);

        return array_filter($keywords, function($keyword) {
            return Str::contains($keyword, [':']);
        });
    }

    private function apply(Builder $query, string $terms)
    {
        list($filter, $value) =  explode(':', $terms);

        switch (strtolower($filter)) {
            // class
            case 'c':
            case 't':
                $query->whereRaw("JSON_SEARCH(cards.keywords, 'one', '$value') IS NOT NULL");
                break;
            case 'r':
                $query->where('cards.rarity', $value);
        }
    }
}
