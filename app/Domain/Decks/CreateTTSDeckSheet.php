<?php
namespace FabDB\Domain\Decks;

/**
 * Creates a new deck sheet for table top simulator, by grabbing all the deck's required card images, and stitching
 * them together into a grid, which is then used for the generated JSON.
 */
class CreateTTSDeckSheet
{
    /**
     * @var int
     */
    private $deckId;

    public function __construct(int $deckId)
    {
        $this->deckId = $deckId;
    }

    public function handle(DeckRepository $decks)
    {
        /** @var Deck $deck */
        $deck = $decks->find($this->deckId);

        $exporter = new TTSExporter($deck);

        if ($deck->requiresNewSheet()) {
            $exporter->execute();
            $exporter->save();
        }
    }
}
