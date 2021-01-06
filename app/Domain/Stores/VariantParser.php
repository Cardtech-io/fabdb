<?php
namespace FabDB\Domain\Stores;

use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\InvalidIdentifier;
use FabDB\Domain\Cards\Set;
use FabDB\Domain\Cards\Sku;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class VariantParser
{
    public const REGEX = '/(U-)?(([A-Z]{3})(U)?([0-9]{3}))(-(rf|cf|gf|ea))?/i';

    /**
     * @var object
     */
    private $variant;
    private $product;

    public function __construct($product, $variant)
    {
        $this->product = $product;
        $this->variant = $variant;
    }

    /**
     * Returns the card variant - standard, promo, rainbow foil or cold foil.
     *
     * @return mixed
     */
    public function finish()
    {
        foreach ([$this->variant->title, $this->product->title] as $title) {
            $title = Str::lower($title);

            switch (true) {
                case Str::contains($title, 'cold'):
                    return 'cf';
                    break;
                case Str::contains($title, 'rainbow'):
                    return 'rf';
                    break;
                case Str::contains($title, 'gold'):
                    return 'gf';
                    break;
            }
        }

        return '';
    }

    public function price()
    {
        return $this->variant->price;
    }

    /**
     * Determines the SKU based on the variant and product data provided.
     *
     * @return Sku
     */
    public function sku(): Sku
    {
        try {
            return new Sku($this->variant->sku);
        }
        // Although the sku is "valid", it doesn't match what we expect as a truly valid sku, as it's missing
        // critical information such as the finish, whether it's unlimited or not.etc. So, we'll try and
        // build a valid for use on our systems.
        catch (\InvalidArgumentException $e) {
            preg_match(self::REGEX, $this->variant->sku, $matches);

            $rawSkuParts = [];

            // Unlimited
            if (!empty($matches[1]) || strpos(strtolower($this->product->title), 'unlimited') || strtolower(substr(Arr::get($matches, 4), 3, 1)) === 'u') {
                $rawSkuParts[] = 'U-';
            }

            // Main identifier part
            $rawSkuParts[] = $this->identifier($matches);

            // Card finish
            if (!isset($matches[6]) && $this->finish()) {
                $rawSkuParts[] = '-'.$this->finish();
            }

            return new Sku(strtoupper(implode('', $rawSkuParts)));
        }
    }

    public function available()
    {
        $available = $this->variant->inventory_quantity;

        return $available < 0 ? 0 : $available;
    }

    private function identifier($matches)
    {
        try {
            $set = new Set($matches[3]);
        }
        catch (\InvalidArgumentException $e) {
            $set = Set::fromTitle($this->product->title);
        }

        if (!$set) {
            throw new InvalidSet($this->product->title, $matches[3]);
        }

        return $set->raw().Arr::get($matches, 5);
    }
}
