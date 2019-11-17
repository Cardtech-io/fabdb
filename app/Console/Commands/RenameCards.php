<?php
namespace FabDB\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class RenameCards extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:rename-cards';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $disk = Storage::disk('scraped');

        $cards = $disk->files('wtr/');

        foreach ($cards as $name => $src) {
            if (!(preg_match_all('/wtr\/WTR([0-9]+)/', $src, $matches))) continue;

            $cardId = $matches[1][0] - 1;
            $dest = 'wtr/'.$cardId.'.png';

            $disk->move($src, $dest);
        }
    }
}
