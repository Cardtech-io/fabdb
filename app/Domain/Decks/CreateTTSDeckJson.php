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
     * @var mixed
     */
    private $cardBack;

    /**
     * @var TTSObserver
     */
    private $observer;

    public function __construct(int $deckId, $cardBack, TTSObserver $observer)
    {
        $this->deckId = $deckId;
        $this->observer = $observer;
        $this->cardBack = $cardBack;
    }

    public function handle(DeckRepository $decks)
    {
        /** @var Deck $deck */
        $deck = $decks->find($this->deckId);

        $exporter = new TTSExporter($deck);
        $exporter->setCardBack($this->cardBack);

        $json = $exporter->generateJson($deck);

        $this->observer->send($json);
    }
}
