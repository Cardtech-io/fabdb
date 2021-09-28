<?php
namespace FabDB\Domain\Cards;

use ErrorException;
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
     * 1 - Unlimited/Language flag
     * 2 - Unlimited
     * 3 - Language
     * 4 - Full Identifier
     * 5 - Set
     * 6 - Card number
     * 7 - Finish (foiling.etc.)
     */
    private const REGEX = '((U)([A-Z]+)?-)?((!!sets!!)([0-9]{3}))(-(ap|rf|cf|gf|ea|aa))?';

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

        return Arr::get($matches, 6);
    }

    public function language()
    {
        $matches = self::match($this->sku);
        $language = strtolower(Arr::get($matches, 3));

        return !empty($language) ? $language : 'en';
    }

    public function raw(): string
    {
        return $this->sku;
    }

    public function __toString(): string
    {
        return $this->raw();
    }

    public function first(): bool
    {
        $matches = self::match($this->sku);

        return empty($matches[2]);
    }

    public function unlimited(): bool
    {
        return !$this->first();
    }

    public function finish()
    {
        $matches = self::match($this->sku);

        return Finish::fromString((string) Arr::get($matches, 8));
    }

    public function set(): Set
    {
        $matches = self::match($this->sku);

        return new Set($matches[5]);
    }

    public static function match(string $sku)
    {
        preg_match('/'.self::regex().'/i', $sku, $matches);

        return $matches;
    }

    public static function fromLSS(string $sku)
    {
        try {
            return new self($sku);
        } catch (\InvalidArgumentException $e) {
            // Something wrong with the sku, try to fix
            $parts = chunk_split($sku, 3);

            if (strlen($parts[1]) == 2) {
                // Probably missing a 0
                $parts[1] = '0'.$parts[1];
            }

            return new self(implode('', $parts));
        }
    }

    /**
     * Strips the unlimited and finish from the sku, resulting in a "pure" sku card identifier.
     *
     * @return string
     */
    public function stripped(): string
    {
        $parts = explode('-', $this->sku);

        // Unlimited: U-WTR000-RF
        if (count($parts) === 3) {
            return $parts[1];
        }

        // Alpha/first editions (WTR000-CF)
        return $parts[0];
    }

    public function jsonSerialize()
    {
        return [
            'sku' => $this->sku,
            'finish' => $this->finish()->readable(),
            'set' => $this->set(),
            'number' => $this->cardNumber()
        ];
    }

    public function appendFinish(Finish $finish)
    {
        $this->sku .= $finish->raw();
    }
}
