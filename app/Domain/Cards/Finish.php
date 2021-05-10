<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Webmozart\Assert\Assert;

class Finish
{
    /**
     * Valid finishes for cards are:
     *
     * - Regular (empty)
     * - Cold foil (cf)
     * - Extended art (ea)
     * - Gold foil (gf)
     * - Rainbow foil (rf)
     *
     * @var string[]
     */
    private static $validFinishes = [
        ''   => 'regular',
        'ap' => 'artist proof',
        'cf' => 'cold',
        'ea' => 'extended',
        'gf' => 'gold',
        'rf' => 'rainbow',
    ];

    /**
     * @var string
     */
    private $finish;

    private function __construct(string $foiling)
    {
        $foiling = Str::lower($foiling);

        Assert::inArray($foiling, array_keys(static::$validFinishes));

        $this->finish = $foiling;
    }

    public static function fromString(string $foiling)
    {
        return new self($foiling);
    }

    public function cold(): bool
    {
        return $this->finish === 'cf';
    }

    public function extendedArt(): bool
    {
        return $this->finish === 'ea';
    }

    public function gold(): bool
    {
        return $this->finish === 'gf';
    }

    public function rainbow(): bool
    {
        return $this->finish === 'rf';
    }

    public function regular()
    {
        return empty($this->finish);
    }

    public function raw(): string
    {
        return $this->readable();
    }

    public function equals(Finish $that)
    {
        return $this->finish == $that->finish;
    }

    public function readable()
    {
        return static::$validFinishes[$this->finish];
    }

    public static function fromVariant(string $variant)
    {
        return new self(array_search($variant, static::$validFinishes));
    }
}
