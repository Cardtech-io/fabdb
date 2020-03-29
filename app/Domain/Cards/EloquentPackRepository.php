<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Facades\DB;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Database\Eloquent\Collection;

class EloquentPackRepository extends EloquentRepository implements PackRepository
{
    /** @var Set */
    private $set;

    protected function model(): Model
    {
        return new Card;
    }

    public function useSet(Set $set)
    {
        $this->set = $set;
    }

    protected function newQuery()
    {
        if (!$this->set) {
            throw new MustDefineSet;
        }

        return parent::newQuery()->where('identifier', 'LIKE', $this->set->uppercase().'%');
    }

    public function getRandomCommons($class, int $num): Collection
    {
        $operator = $class == 'generic' ? '=' : '<>';

        return $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->whereRarity('C')
            ->whereRaw("REPLACE(JSON_EXTRACT(keywords, '$[0]'), '\"', '') $operator 'generic'")
            ->whereRaw("REPLACE(JSON_EXTRACT(keywords, '$[1]'), '\"', '') NOT IN ('hero', 'equipment')")
            ->orderBy(DB::raw('RAND()'))
            ->take($num)
            ->get();
    }

    public function getRandomEquipmentCommon(): Card
    {
        return $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->whereRarity('C')
            ->where(DB::raw("JSON_EXTRACT(keywords, '$[1]')"), 'equipment')
            ->orderBy(DB::raw('RAND()'))
            ->first();
    }

    public function getRandom(Rarity $rarity, array $exclude = []): Card
    {
        $query = $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->whereRarity($rarity)
            ->orderBy(DB::raw('RAND()'));

        if ($exclude) {
            $query->whereNotIn('id', $exclude);
        }

        return $query->first();
    }

    public function getRandomFoil(): Card
    {
        return $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->where('rarity', '!=', 'T')
            ->where(DB::raw("JSON_EXTRACT(keywords, '$[1]')"), '<>', 'hero')
            ->orderBy(DB::raw('RAND()'))
            ->first();
    }
}
