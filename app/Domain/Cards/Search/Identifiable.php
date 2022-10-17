<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Support\Str;

trait Identifiable
{
    /**
     * Operators are used to identify terms/clauses as being programmatic in nature (power users stuff!)
     *
     * @var string[]
     */
    private $operators = ['=', '>', '<'];

    protected function matchesIdentifier(string $keywords)
    {
        $keywords = preg_split('/[\s,]+/', $keywords);

        foreach ($keywords as $keyword) {
            if (is_numeric($keyword) || preg_match($this->pattern(), $keyword) || is_numeric(strpos($keyword, '-'))) {
                return true;
            }
        }

        return false;
    }

    protected function identifiers($keywords)
    {
        return array_filter(preg_split('/[\s,]+/', $keywords), function($keyword) {
            return is_numeric($keyword) || is_numeric(strpos($keyword, '-')) || preg_match($this->pattern(), $keyword);
        });
    }

    private function pattern()
    {
        return '/^(U-)?([a-z]{3})?[0-9]{3}(-(CF|RF|GF))?$/i';
    }

    /**
     * Determines whether or not a user is using programmatic keywords (scryfall-like).
     *
     * @param string $keywords
     * @return bool
     */
    private function isProgrammatic(string $keywords): bool
    {
        return Str::contains($keywords, $this->operators) || Str::contains($keywords, '!');
    }
}
