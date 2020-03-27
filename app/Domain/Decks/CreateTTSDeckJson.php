<?php
namespace FabDB\Domain\Decks;

/**
 * Compiles the JSON for the required deck sheet for Tabletop Simulator.
 */
class CreateTTSDeckJson
{
    /**
     * @var int
     */
    private $deckId;

    /**
     * @var TTSObserver
     */
    private $observer;

    public function __construct(int $deckId, TTSObserver $observer)
    {
        $this->deckId = $deckId;
        $this->observer = $observer;
    }

    public function handle(DeckRepository $decks)
    {
        /** @var Deck $deck */
        $deck = $decks->find($this->deckId);

        $exporter = new TTSExporter($deck);

        $json = $exporter->generateJson($deck);

        $this->observer->send($json);
    }
}
