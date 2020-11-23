<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Arr;
use Webmozart\Assert\Assert;

class Sku
{
    private $regex = '(U-)?([a-z]{3}[0-9]{3})(-(rf|cf|gf))?';

    /**
     * @var string
     */
    private $sku;

    public function __construct(string $sku)
    {
        Assert::regex($sku,'/^'.$this->regex.'$/i');

        $this->sku = $sku;
    }

    public function raw(): string
    {
        return $this->sku;
    }

    public function __toString(): string
    {
        return $this->raw();
    }

    public function firstEdition(): bool
    {
        $matches = $this->match($this->sku);

        return empty($matches[1]);
    }

    public function foiling()
    {
        $matches = $this->match($this->sku);

        return Foiling::fromString((string) Arr::get($matches, 4));
    }

    private function match(string $sku)
    {
        preg_match('/'.$this->regex.'/i', $sku, $matches);

        return $matches;
    }
}
