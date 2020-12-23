<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Arr;
use JsonSerializable;
use Webmozart\Assert\Assert;

class Sku implements JsonSerializable
{
    private $regex = '(U-)?([a-z]{3}[0-9]{3})(-(rf|cf|gf|ea))?';

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

    public function unlimited(): bool
    {
        return !$this->firstEdition();
    }

    public function finish()
    {
        $matches = $this->match($this->sku);

        return Finish::fromString((string) Arr::get($matches, 4));
    }

    public function set(): Set
    {
        return Set::fromUid($this->raw());
    }

    private function match(string $sku)
    {
        preg_match('/'.$this->regex.'/i', $sku, $matches);

        return $matches;
    }

    public function jsonSerialize()
    {
        return [
            'sku' => $this->sku,
            'finish' => $this->finish()->readable(),
            'set' => $this->set(),
        ];
    }
}
