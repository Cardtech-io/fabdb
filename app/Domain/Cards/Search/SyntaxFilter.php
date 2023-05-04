<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Cards\Search\Params\Params;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class SyntaxFilter implements SearchFilter
{
    use Identifiable;

    public function applies(array $input)
    {
        return isset($input['keywords']) && !empty($input['keywords']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $keywords = $this->filter($input['keywords']);

        foreach ($keywords as $terms) {
            $this->apply($query, $terms);
        }
    }

    private function filter(string $keywords): array
    {
        return preg_split('/\s(?=([^"]*"[^"]*")*[^"]*$)/', $keywords);
    }

    private function apply(Builder $query, string $term)
    {
        $match = preg_match('/(!)?([a-z]+)((<=|>=|[=<>])([a-z0-9\*\s"]+))?/i', $term, $parts);

        if (!$match) return;

        $invert = $parts[1];
        $clause = strtolower($parts[2]);

        // The following 2 values may be omitted completely if they're looking for a simple inversion, such as !cost  (all cards with no cost value)
        $operator = Arr::get($parts, 4);
        $value = str_replace('"', '', Arr::get($parts, 5));

        if (empty($clause)) {
            return;
        }

        // Param objects will handle the query modification themselves
        foreach ($this->params() as $param) {
            if ($param->handles($clause)) {
                $param->applyTo($query, $operator, $value, $invert);
                break;
            }
        }
    }

    private function params(): Collection
    {
        return new Params;
    }
}
