<?php
namespace FabDB\Domain\Decks;

class DeckSheetObserver
{
    /** @var string */
    private $sheetPath;

    public function setSheetPath(string $sheetPath)
    {
        $this->sheetPath = $sheetPath;
    }
}
