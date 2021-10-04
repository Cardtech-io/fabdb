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
        $rows->each(function($row) {
            User::whereEmail($row['email'])->update(['patreon_id' => $row['user_id']]);
        });

        $activeMembers = $rows->pluck('user_id');

        User::whereNotIn('patreon_id', $activeMembers)
            ->whereNotIn('subscription', ['promo', 'fabled'])
            ->update(['subscription' => null]);
    }

    public function batchSize(): int
    {
        return 10000;
    }
}
