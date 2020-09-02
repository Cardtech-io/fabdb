<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

class ClassFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['class']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $classes = [$input['class']];

        if ($input['use-case'] == 'build') {
            $classes[] = 'generic';
        }

        $query->where(function($query) use ($classes) {
            foreach ($classes as $class) {
                $query->orWhereRaw("JSON_SEARCH(keywords, 'one', '$class') IS NOT NULL");
            }
        });
    }
}
