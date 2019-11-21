<?php
namespace FabDB\Domain\Cards;

class SearchParam
{
    /**
     * @var string
     */
    private $term;

    public function __construct(string $term)
    {
        $this->term = $term;
    }

    /**
     * Returns an array of set and id if the term represents a specific search for a given card.
     *
     * @return array|false
     */
    public function specific()
    {
        $match = preg_match('/([A-Z]{3})?([0-9]{1,3})/i', $this->term, $matches);

        if ($match) {
            return $matches;
        }

        return false;
    }
}
