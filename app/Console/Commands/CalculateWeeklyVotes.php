<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Comments\CommentRepository;
use FabDB\Domain\Decks\DeckRepository;
use Illuminate\Console\Command;

class CalculateWeeklyVotes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:calculate-weekly-votes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Goes through the votes for the past week and updates the relevant resources.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(DeckRepository $decks)
    {
        $decks->calculateWeeklyVotes();

        return 0;
    }
}
