<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Dispatchable;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class AddDeck implements Loggable
{
    use Dispatchable;
    use LogsParams;

    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $name;

    public function __construct(int $userId, string $name)
    {
        $this->userId = $userId;
        $this->name = $name;
    }

    public function handle(DeckRepository $decks)
    {
        $deck = Deck::add($this->userId, $this->name);

        $decks->save($deck);

        dd($deck);

        $this->dispatch($deck->releaseEvents());

        return $deck;
    }
}
