<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;
use Illuminate\Support\Arr;

class AddCardToDeck implements Loggable
{
    use LogsParams;

    /**
     * @var Deck
     */
    private $deckId;

    /**
     * @var Card
     */
    private $cardId;

    public function __construct(int $deckId, int $cardId)
    {
        $this->deckId = $deckId;
        $this->cardId = $cardId;
    }

    public function handle(DeckRepository $decks, CardRepository $cards)
    {
        $decks->addCardToDeck($this->deckId, $this->cardId);

        $card = $cards->find($this->cardId);
        $deck = $decks->find($this->deckId);

        // Now we update the deck's settings if the card was a hero
        if ($card->isHero()) {
            $deck->format = Arr::get($card->keywords, 2) == 'young' ? 'blitz' : 'constructed';
            $decks->save($deck);
        }
    }
}
