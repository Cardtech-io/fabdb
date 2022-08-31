<?php
namespace FabDB\Domain\Cards;

use Webmozart\Assert\Assert;

class Set implements \JsonSerializable
{
    /**
     * @var string
     */
    private $set;

    public function __construct(string $set)
    {
        $this->set = strtolower($set);

        Assert::oneOf($this->set, array_keys(config('game.sets')));
    }

    public function __toString(): string
    {
        return $this->raw();
    }

    public function raw(): string
    {
        return $this->set;
    }

    public static function fromUid(string $uid)
    {
        preg_match('/^(((U)([A-Z]+)?-)?[A-Z]{3})[0-9]{3}/i', $uid, $matches);

        return new self($matches[1]);
    }

    public static function fromSku(Sku $sku)
    {
        return $sku->set();
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

    /**
     * Tries to create a new set object from a string title. Said title should include the name of the set.
     */
    public static function fromTitle(string $title)
    {
        $title = strtolower($title);

        foreach (config('game.sets') as $set) {
            if (strpos($title, strtolower($set['name']))) {
                return new self($set['id']);
            }
        }
    }

    public function jsonSerialize()
    {
        return config('game.sets.'.$this->set);
    }
}
