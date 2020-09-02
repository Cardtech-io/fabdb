<?php
namespace FabDB\Domain\Stores;

use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\InvalidIdentifier;
use Illuminate\Support\Str;

class VariantParser
{
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
    public function cardVariant()
    {
        foreach ([$this->variant->title, $this->product->title] as $title) {
            $title = Str::lower($title);

            switch (true) {
                case Str::contains($title, 'cold'):
                    return 'cold';
                    break;
                case Str::contains($title, 'rainbow'):
                    return 'rainbow';
                    break;
            }
        }

        return 'regular';
    }

    public function price()
    {
        return $this->variant->price;
    }

    /**
     * Bit of logic here as some stores don't enter SKUs correctly. This effectively allows
     * for lazy sku ids, such as: WTR0, CRU97.etc.
     *
     * @return Identifier
     * @throws InvalidIdentifier
     */
    public function identifier(): Identifier
    {
        preg_match('/([a-z]{3})([0-9]{1,3})/i', $this->variant->sku, $parts);

        $parts[2] = str_pad($parts[2], 0, STR_PAD_LEFT);

        return Identifier::fromVariant(implode('', array_slice($parts, 1)));
    }

    public function available()
    {
        $available = $this->variant->inventory_quantity;

        return $available < 0 ? 0 : $available;
    }
}
