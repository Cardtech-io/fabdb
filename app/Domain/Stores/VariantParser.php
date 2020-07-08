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

    public function identifier(): Identifier
    {
        return Identifier::fromVariant($this->variant->sku);
    }

    public function available()
    {
        $available = $this->variant->inventory_quantity;

        return $available < 0 ? 0 : $available;
    }
}