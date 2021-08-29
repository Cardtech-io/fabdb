<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Search\ClassFilter;
use FabDB\Domain\Cards\Search\CollectionFilter;
use FabDB\Domain\Cards\Search\CostFilter;
use FabDB\Domain\Cards\Search\IdentifierFilter;
use FabDB\Domain\Cards\Search\KeywordFilter;
use FabDB\Domain\Cards\Search\OrderFilter;
use FabDB\Domain\Cards\Search\PitchFilter;
use FabDB\Domain\Cards\Search\RarityFilter;
use FabDB\Domain\Cards\Search\SyntaxFilter;
use FabDB\Domain\Cards\Search\TalentFilter;
use FabDB\Domain\Cards\Search\TypeFilter;
use FabDB\Domain\Users\User;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentPrintingRepository extends EloquentRepository implements PrintingRepository
{
    protected function model(): Model
    {
        return new Printing;
    }

    public function findBySku(string $sku)
    {
        return $this->newQuery()->whereSku($sku)->first();
    }

    public function collection(User $user, array $input)
    {
        $query = $this->newQuery();

        $query->select([
            'printings.id',
            'printings.rarity',
            'printings.card_id',
            'printings.sku',
            'printings.set',
            'printings.rarity',
            'owned_cards.total',
            'owned_cards.trade',
            'owned_cards.want',
            'cards.id AS card_id',
            'cards.identifier',
            'cards.name',
        ]);

        $filters = [
            new KeywordFilter,
            new IdentifierFilter,
            new ClassFilter,
            new TalentFilter,
            new TypeFilter,
            new CostFilter,
            new PitchFilter,
            new RarityFilter,
            new CollectionFilter($user),
            new OrderFilter,
        ];

        $this->applyFilters($query, $filters, $input);

        return $query;
    }
}
