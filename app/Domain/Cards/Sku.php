<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use JsonSerializable;
use Webmozart\Assert\Assert;

class Sku implements JsonSerializable
{
    /*
     * When matching on this regex:
     *
     * 0 - Full match
     * 1 - Unlimited flag
     * 2 - Full Identifier
     * 3 - Set
     * 4 - Card number
     * 5 - Finish (foiling.etc.)
     */
    private const REGEX = '(U-)?((!!sets!!)([0-9]{3}))(-(rf|cf|gf|ea))?';

    /**
     * @var string
     */
    private $sku;

    public function __construct(string $sku)
    {
        Assert::regex($sku,'/^'.self::regex().'$/i');

        $this->sku = $sku;
    }

    public static function regex()
    {
        $sets = array_filter(Arr::pluck(config('game.sets'), 'id'), function($id) {
            return !Str::startsWith($id, 'u-');
        });

        return str_replace('!!sets!!', implode('|', $sets), self::REGEX);
    }

    public function cardNumber()
    {
        $matches = self::match($this->sku);

        return Set::fromUid(Arr::get($matches, 5));
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
        $matches = self::match($this->sku);

        return empty($matches[1]);
    }

    public function unlimited(): bool
    {
        return !$this->firstEdition();
    }

    public function finish()
    {
        $matches = self::match($this->sku);

        return Finish::fromString((string) Arr::get($matches, 6));
    }

    public function set(): Set
    {
        $matches = self::match($this->sku);

        return Set::fromUid(Arr::get($matches, 3));
    }

    public static function match(string $sku)
    {
        preg_match('/'.self::regex().'/i', $sku, $matches);

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
