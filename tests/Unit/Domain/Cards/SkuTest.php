<?php
namespace Tests\Unit\Domain\Cards;

use FabDB\Domain\Cards\Sku;
use InvalidArgumentException;
use Tests\TestCase;

class SkuTest extends TestCase
{
    function test_it_validates_sku_strings()
    {
        $this->expectException(InvalidArgumentException::class);

        new Sku('lkjsdf');
    }

    function test_it_can_work_with_various_skus()
    {
        $sku1 = new Sku('WTR000-CF');
        $sku2 = new Sku('U-ARC000-RF');
        $sku3 = new Sku('CRU012');

        $this->assertInstanceOf(Sku::class, $sku1);
        $this->assertInstanceOf(Sku::class, $sku2);
        $this->assertInstanceOf(Sku::class, $sku3);
    }

    function test_it_can_extract_specific_details()
    {
        $sku1 = new Sku('U-ARC156-RF');
        $sku2 = new Sku('ARC000-CF');
        $sku3 = new Sku('U-CRU053');

        $this->assertTrue($sku1->finish()->rainbow());
        $this->assertTrue($sku2->finish()->cold());
        $this->assertTrue($sku3->finish()->regular());
    }
}
