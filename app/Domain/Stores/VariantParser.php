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

    public function __construct($variant)
    {
        $this->variant = $variant;
    }

    /**
     * Returns the card variant - standard, promo, rainbow foil or cold foil.
     *
     * @return mixed
     */
    public function cardVariant()
    {
        $title = Str::lower($this->variant->title);

        switch (true) {
            case Str::contains($title, 'cold'):
                return 'cold';
                break;
            case Str::contains($title, 'rainbow'):
                return 'rainbow';
                break;
            default:
                return 'regular';
        }
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
        return $this->variant->inventory_quantity;
    }
}