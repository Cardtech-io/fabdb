<?php
namespace FabDB\Domain\Supporters;

use FabDB\Console\Commands\PatreonSync;
use FabDB\Domain\Users\User;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class MemberSync implements ToCollection, WithHeadingRow, WithBatchInserts
{
    use Importable;

    /**
     * @var PatreonSync
     */
    private $logger;

    public function __construct(PatreonSync $logger)
    {
        $this->logger = $logger;
    }
    
    public function collection(Collection $rows)
    {
        $activeMembers = $rows->pluck('email');

        User::whereNotIn('email', $activeMembers)
            ->whereNotIn('subscription', ['promo', 'fabled'])
            ->update(['subscription' => null]);
    }

    public function batchSize(): int
    {
        return 10000;
    }
}
