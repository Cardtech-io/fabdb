<?php
namespace FabDB\Domain\Stores;

class InvalidSet extends \Exception
{
    private $title;
    private $set;

    public function __construct($title, $set)
    {
        $this->title = $title;
        $this->set = $set;
    }

    public function title()
    {
        return $this->title;
    }

    public function set()
    {
        return $this->set;
    }
}
