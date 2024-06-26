<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Boosters\Packs;
use FabDB\Domain\Cards\Set;
use Illuminate\Console\Command;

class GeneratePack extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:generate-pack --set';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates a booster pack to be as close to what we know about the algorithm.';

    /**
     * Execute the console command.
     *
     * @param Packs $packs
     * @return mixed
     */
    public function handle(Packs $packs)
    {
        $set = new Set($this->choice('Which set would you like to generate a booster from?', $this->sets()));

        $start = microtime(true);
        $pack = $packs->generate($set);

        $total = microtime(true) - $start;
        $this->info('Generation completed in '.$total.' seconds');

        $pack = $pack->map(function(Card $card) {
            return '['.(string) $card->rarity.'] '.$card->name;
        });

        dd($pack->toArray());
    }

    public function sets(): array
    {
        return array_map(function($set) {
            return $set['id'];
        }, array_filter(config('game.sets'), function($set) {
            return isset($set['draftable']);
        }));
    }
}
