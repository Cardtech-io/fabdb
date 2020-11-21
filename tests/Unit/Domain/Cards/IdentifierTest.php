<?php
namespace Tests\Unit\Domain\Cards;

use FabDB\Domain\Cards\Identifier;
use Tests\TestCase;

class IdentifierTest extends TestCase
{
    function test_identifiers_can_be_created_from_valid_strings()
    {
        $identifier = Identifier::fromString('WTR000');

        $this->assertInstanceOf(Identifier::class, $identifier);
        $this->assertSame('WTR', $identifier->set());
        $this->assertSame('000', $identifier->id());
        $this->assertSame('0', $identifier->strippedId());
    }

    function test_it_validates_possible_identifier_candidates()
    {
        $this->assertTrue((bool) Identifier::matches('ARC017'));
        $this->assertTrue((bool) Identifier::matches('UWTR000'));
        $this->assertFalse((bool) Identifier::matches('ARC12017'));
    }

    function test_it_can_create_new_identifiers_as_unlimited()
    {
        $identifier = Identifier::fromStringAsUnlimited('WTR150');

        $this->assertInstanceOf(Identifier::class, $identifier);
        $this->assertSame('UWTR150', $identifier->raw());
    }
}
