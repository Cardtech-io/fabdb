<?php
namespace FabDB\Domain\Cards;

use Webmozart\Assert\Assert;

class CardType
{
    /**
     * @var string
     */
    private $type;

    public function __construct(string $type)
    {
        Assert::oneOf($type, ['standard', 'foil', 'promo']);
        
        $this->type = $type;
    }

    public function name(): string
    {
        return $this->type;
    }
}
