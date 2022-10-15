<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Cards\Search\Params\Params;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
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
        $keywords = $this->filter($input['keywords']);

        foreach ($keywords as $terms) {
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
        $match = preg_match('/<=|>=/', $terms, $operator);

        if (!$match) {
            preg_match('/[=<>]/', $terms, $operator);
        }

        list($clause, $value) =  explode($operator[0], $terms);
        if (is_null($clause) || is_null($value)) {
            return;
        }

        $clause = strtolower($clause);
        $rawClause = str_replace('!', '', $clause);

        // Param objects will handle the query modification themselves
        foreach ($this->params() as $param) {
            if ($param->handles($rawClause)) {
                $invert = str_starts_with($clause, '!');

                $param->applyTo($query, $operator[0], $value, $invert);
            }
        }
    }

    private function params(): Collection
    {
        return new Params;
    }
}
