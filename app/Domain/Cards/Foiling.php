<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Str;
use Webmozart\Assert\Assert;

class Foiling
{
    /**
     * @var string
     */
    private $foiling;

    private function __construct(string $foiling)
    {
        $foiling = Str::lower($foiling);

        Assert::inArray($foiling, ['', 'cf', 'gf', 'rf']);

        $this->foiling = $foiling;
    }

    public static function fromString(string $foiling)
    {
        return new self($foiling);
    }

    public function cold(): bool
    {
        return $this->foiling === 'cf';
    }

    public function gold(): bool
    {
        return $this->foiling === 'gf';
    }

    public function rainbow(): bool
    {
        return $this->foiling === 'rf';
    }

    public function none()
    {
        return empty($this->foiling);
    }
}
