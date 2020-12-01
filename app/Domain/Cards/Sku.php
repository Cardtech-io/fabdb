<?php
namespace FabDB\Domain\Cards;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Support\Arr;
use Webmozart\Assert\Assert;

class Sku implements CastsAttributes
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

    public function finish()
    {
        $matches = $this->match($this->sku);

        return Finish::fromString((string) Arr::get($matches, 4));
    }

    private function match(string $sku)
    {
        preg_match('/'.$this->regex.'/i', $sku, $matches);

        return $matches;
    }

    public function get($model, string $key, $value, array $attributes)
    {
        return new self($value);
    }

    public function set($model, string $key, $value, array $attributes)
    {
        return $value;
    }
}
