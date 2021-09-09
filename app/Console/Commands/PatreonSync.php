<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Supporters\MemberSync;
use Illuminate\Console\Command;

class PatreonSync extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:patreon-sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Synchronises FaB DB memberships with active Patreon memberships, based on the provided export.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $import = new MemberSync($this);
        $import->import('members.csv', 'patreon');
    }
}
