<?php
namespace FabDB\Domain\Cards;

use Webmozart\Assert\Assert;

class Set
{
    /**
     * @var string
     */
    private $set;

    public function __construct(string $set)
    {
        $this->set = strtolower($set);

        Assert::oneOf($this->set, config('cards.sets'));
    }

    public function __toString(): string
    {
        return $this->set;
    }

    public function uppercase(): string
    {
        return strtoupper($this->set);
    }

    /**
     * Equivalence validation/check.
     *
     * @param Set $other
     * @return bool
     */
    public function is(Set $other)
    {
        return $this->set === $other->set;
    }
}