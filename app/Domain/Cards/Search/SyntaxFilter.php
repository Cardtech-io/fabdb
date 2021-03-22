<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SyntaxFilter implements SearchFilter
{
    private $operators = ['=', '>', '<'];

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
        return Str::contains($keywords, $this->operators);
    }

    private function filter(string $keywords): array
    {
        $keywords = preg_split('/\s(?=([^"]*"[^"]*")*[^"]*$)/', $keywords);

        return array_filter($keywords, function($keyword) {
            return Str::contains($keyword, $this->operators);
        });
    }

    private function apply(Builder $query, string $terms)
    {
        preg_match('/[\=\<\>]/', $terms, $operator);

        list($filter, $value) =  preg_split('/[\=\<\>]/', $terms);

        $value = explode(' ', str_replace('"', '', $value));

        switch (strtolower($filter)) {
            case 'a':
            case 'attack':
            case 'power':
                $query->where("stats->attack", $operator[0], DB::raw($value[0]));
                break;
            // class
            case 'c':
            case 'class':
                $query->whereRaw("JSON_SEARCH(cards.keywords, 'one', '$value[0]') IS NOT NULL");
                break;
            case 'd':
            case 'defense':
                $query->where("stats->defense", $operator[0], $value[0]);
                break;
            // Card type
            case 't':
            case 'type':
                foreach ($value as $part) {
                    $query->whereRaw("JSON_SEARCH(cards.keywords, 'one', '$part') IS NOT NULL");
                }
                break;
            case 'r':
            case 'rarity':
                $query->where('cards.rarity', $value[0]);
                break;
            case 'p':
            case 'pitch':
                $query->where("stats->resource", $operator[0], $value[0]);
                break;
            case 'co':
            case 'cost':
                $query->where("stats->cost", $operator[0], $value[0]);
        }
    }
}
