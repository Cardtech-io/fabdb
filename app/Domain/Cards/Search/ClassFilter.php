<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class ClassFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['class']) && !empty($input['class']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $this->matchesClassOrSpecialization($input['class'], $query);
    }

    /**
     * @param string $class
     * @param Builder $query
     */
    private function matchesClassOrSpecialization(string $class, Builder $query)
    {
        $classes = Arr::flatten([explode(',', $class)]);

        $query->where(function ($query) use ($classes) {
            foreach ($classes as $class) {
                if ($class === 'none') {
                    $query->whereNull("class");
                } else {
                    $query->orWhere('class', $class);
                }
            }

            if (in_array('shapeshifter', $classes)) {
                $query->orWhere('search_text', 'LIKE', '%specialization%');
            }
        });
    }
}
