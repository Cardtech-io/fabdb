<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Ruling;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use League\Csv\Reader;

class SeedRulings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:rulings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seeds the database with the ruling entries found at storage/carddb/rulings.csv';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->truncate();

        $csvFile = Storage::disk('carddb')->getAdapter()->getPathPrefix()."rulings.csv";
        $csv = Reader::createFromPath($csvFile, 'r');
        $csv->setHeaderOffset(0);
        $rulings = $csv->getRecords();

        foreach ($rulings as $ruling) {
            $description = trim($ruling['Description']);
            $source = $ruling['Source'];
            $cardIds = $this->getCardIds($ruling);

            $ruling = Ruling::create(compact('description', 'source'));
            $ruling->cards()->sync($cardIds);
        }

        $this->info('Done.');
    }

    private function getCardIds(array $ruling)
    {
        $query = DB::table('cards')->select('id');

        if ($ruling['Keyword']) {
            $query->where('search_text', 'LIKE', '%'.$ruling['Keyword'].'%');
        }

        if ($ruling['Cards']) {
            $this->cardIdentifiers($ruling['Cards'], $query);
        }

        return $query->pluck('id')->toArray();
    }

    /**
     * @param $cards
     * @param \Illuminate\Database\Query\Builder $query
     * @return mixed
     */
    private function cardIdentifiers($cards, $query)
    {
        $identifiers = explode(',', $cards);
        $ranged = Str::contains($identifiers[0], '-');

        if ($ranged) {
            preg_match('/^([A-Z]{3})([0-9]{3})-([0-9]{3})$/', $identifiers[0], $matches);

            $identifiers = array_map(function ($item) use ($matches) {
                return $matches[1] . $item;
            }, range($matches[2], $matches[3]));
        }

        $query->whereIn('identifier', $identifiers);
    }

    private function truncate()
    {
        Ruling::all()->each(function($ruling) {
            $ruling->delete();
        });
    }
}
