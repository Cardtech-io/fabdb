<?php
namespace FabDB\Domain\Practise;

use FabDB\Library\Dispatchable;

class SavePack
{
    use Dispatchable;

    private int $practiseId;
    private array $cardIds;

    public function __construct(int $practiseId, array $cardIds)
    {
        $this->practiseId = $practiseId;
        $this->cardIds = $cardIds;
    }

    public function handle(PackRepository $packs)
    {
        $pack = Pack::forPractise($this->practiseId, $this->cardIds);

        $packs->save($pack);

        $this->dispatch($pack->releaseEvents());
    }
}
