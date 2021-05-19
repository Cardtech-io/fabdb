<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Practise\PractiseRepository;
use FabDB\Library\Dispatchable;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class AddDeck implements Loggable
{
    use Dispatchable;
    use LogsParams;

    private int $userId;
    private string $name;
    private ?string $practise;
    private Deck $deck;

    public function __construct(int $userId, string $name, ?string $practise)
    {
        $this->userId = $userId;
        $this->name = $name;
        $this->practise = $practise;
    }

    public function handle(DeckRepository $decks, PractiseRepository $practises)
    {
        $practiseId = $this->practise ? $practises->bySlug($this->practise)->id : null;

        $this->deck = Deck::add($this->userId, $this->name, $practiseId);

        $decks->save($this->deck);

        $this->dispatch($this->deck->releaseEvents());
    }

    public function deck(): Deck
    {
        return $this->deck;
    }
}
