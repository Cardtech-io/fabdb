<?php
namespace FabDB\Domain\Cards;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Webmozart\Assert\Assert;

class Edition
{
    /**
     * @var string
     */
    private $edition;

    public function __construct(?string $edition)
    {
        Assert::inArray($edition, [null, '', 'Alpha Print', '1st Edition', 'Unlimited', 'Slingshot Underground', 'English']);

        $this->edition = $edition;
    }

    public function none()
    {
        return is_null($this->edition);
    }

    public function raw(): ?string
    {
        return $this->edition;
    }
}
