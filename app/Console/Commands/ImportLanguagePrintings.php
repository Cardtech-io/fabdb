<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Edition;
use FabDB\Domain\Cards\Printing;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;
use FabDB\Domain\Cards\Sku;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class ImportLanguagePrintings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:import-language-printings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Imports the printings of another language, provided by LSS.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(CardRepository $cards)
    {
        $choices = $this->files();
        $file = $this->choice('Which file would you like to import?', $choices);

        preg_match('/_([a-z]+).json$/', $file, $matches);

        $language = $matches[1];

        $prints = json_decode($this->disk()->get($file), true);

        // Get the original card
        foreach ($prints as $print) {
            $card = $cards->findBySku($print['Card Number']);

            Printing::register(
                $card->id,
                Sku::fromLSS($print['uid']),
                Set::fromUid($print['Card Number']),
                Rarity::fromLss($print['Rarity']),
                new Edition($print['Edition']),
                $language,
                $print['Card Name'],
                $print['Card Effect'],
                $print['Flavour Text']
            );
        }

        return 0;
    }

    private function files()
    {
        return array_filter(
            $this->disk()->files(),
            fn($file) => preg_match('/\.json$/', $file)
        );
    }

    private function disk()
    {
        return Storage::disk('carddb');
    }
}
