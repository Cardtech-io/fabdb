<?php
namespace Tests\Unit\Domain\Cards;

use FabDB\Domain\Cards\Identifier;
use Tests\TestCase;

class IdentifierTest extends TestCase
{
    function test_identifiers_can_be_created_from_names()
    {
        $identifier = Identifier::fromName('Fyendal\'s Spring Tunic');

        $this->assertInstanceOf(Identifier::class, $identifier);
        $this->assertSame('fyendals-spring-tunic', $identifier->raw());
    }

    function test_it_appends_the_correct_colour_with_each_resource_value()
    {
        $identifier1 = Identifier::fromName('Head Shot (Red)');
        $identifier2 = Identifier::fromName('Head Shot (Yellow)');
        $identifier3 = Identifier::fromName('Head Shot (Blue)');

        $this->assertSame('head-shot-red', $identifier1->raw());
        $this->assertSame('head-shot-yellow', $identifier2->raw());
        $this->assertSame('head-shot-blue', $identifier3->raw());
    }

    function test_it_can_create_the_correct_name_from_row_of_data()
    {
        $identifier1 = Identifier::fromLSS(['Card Name' => 'Head Shot', 'Pitch Value' => 2, 'Rarity' => 'Common']);
        $identifier2 = Identifier::fromLSS(['Card Name' => 'Glint', 'Pitch Value' => 3, 'Rarity' => 'Majestic']);
        
        $this->assertSame('head-shot-yellow', $identifier1->raw());
        $this->assertSame('glint', $identifier2->raw());
    }
}
