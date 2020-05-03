<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Search\BannedCardsFilter;
use FabDB\Domain\Cards\Search\ClassFilter;
use FabDB\Domain\Cards\Search\IdentifierFilter;
use FabDB\Domain\Cards\Search\KeywordFilter;
use FabDB\Domain\Cards\Search\OrderFilter;
use FabDB\Domain\Cards\Search\OwnedCardsFilter;
use FabDB\Domain\Cards\Search\SetFilter;
use FabDB\Domain\Cards\Search\TypeFilter;
use FabDB\Domain\Users\User;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class EloquentCardRepository extends EloquentRepository implements CardRepository
{
    /**
     * @var CardViewer
     */
    private $cardViewer;

    public function __construct(CardViewer $cardViewer)
    {
        $this->cardViewer = $cardViewer;
    }

    protected function model(): Model
    {
        return new Card;
    }

    /**
     * Searches for a range of cards, that match the provided parameters.
     *
     * @param User|null $user
     * @param array $input
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function search(?User $user, array $input)
    {
        $query = $this->newQuery();

        $query->select([
            'cards.identifier',
            'cards.name',
            'cards.keywords',
            'cards.stats',
        ]);

        $filters = [
            new SetFilter,
            new KeywordFilter,
            new IdentifierFilter,
            new BannedCardsFilter,
            new ClassFilter,
            new TypeFilter,
            new OwnedCardsFilter($user),
            new OrderFilter
        ];

        foreach ($filters as $filter) {
            if ($filter->applies($input)) {
                $filter->applyTo($query, $input);
            }
        }

        return $query;
    }

    /**
     * Looks for a specific card, and includes the count of how many of that card the user may have.
     *
     * @param string $identifier
     * @param int $userId
     * @return
     */
    public function findByIdentifier(string $identifier, int $userId = null)
    {
        $select = [
            'cards.id',
            'cards.identifier',
            'cards.name',
            'cards.rarity',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.flavour',
        ];

        $query = $this->newQuery()
            ->whereIdentifier($identifier)
            ->select($select);

        if ($userId) {
            $query->addSelect(['owned_cards.standard', 'owned_cards.foil']);
            $query->leftJoin('owned_cards', function($join) use ($userId) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $userId);
            });
        }

        return $query->firstOrFail();
    }

    public function view(string $identifier): Card
    {
        $card = $this->findByIdentifier($identifier);

        $card->next = $this->nav(function() use ($identifier) {
            return $this->findByIdentifier($this->cardViewer->newIdentifier($identifier, '+'))->identifier;
        });

        $card->prev = $this->nav(function() use ($identifier) {
            return $this->findByIdentifier($this->cardViewer->newIdentifier($identifier, '-'))->identifier;
        });

        return $card;
    }

    public function getFirstIdentifier(string $set): string
    {
        $identifier = $this->newQuery()
            ->where('identifier', 'LIKE', "$set%")
            ->select('identifier')
            ->orderBy('identifier', 'asc')
            ->limit(1)
            ->pluck('identifier')
            ->first();

        return str_split($identifier, 3)[1];
    }

    private function nav(\Closure $exec)
    {
        try { return $exec(); }
        catch (ModelNotFoundException $e) {}
    }
}
