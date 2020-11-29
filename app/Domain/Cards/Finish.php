<?php
namespace FabDB\Domain\Cards;

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
    private $validFinishes = ['', 'cf', 'ea', 'gf', 'rf'];

    /**
     * @var string
     */
    private $finish;

    private function __construct(string $foiling)
    {
        $foiling = Str::lower($foiling);

        Assert::inArray($foiling, $this->validFinishes);

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

    public function none()
    {
        return empty($this->finish);
    }
}
