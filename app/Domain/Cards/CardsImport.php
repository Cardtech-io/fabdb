<?php
namespace FabDB\Domain\Cards;

use ErrorException;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CardsImport
{
    private Identifier $identifier;
    private bool $withImages;
    private Command $command;
    private bool $printsOnly;

    public function __construct(Command $command, bool $withImages, bool $printsOnly = false)
    {
        $this->command = $command;
        $this->withImages = $withImages;
        $this->printsOnly = $printsOnly;
    }

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            if (!Arr::get($row, 'uid')) continue;

            if (strpos($row['uid'], 'XXX') === 0) {
                $this->log('warn', "Tricky card, ignoring [{$row['uid']}]");
                continue;
            }

            $stats = $this->stats($row);

            $this->identifier = Identifier::fromLSS($row);

            // Next, we check to see if our account has an image for the card on DO. If not, we fetch from the google API
            if ($this->withImages) {
                $this->copyImage($row);
            }

            $sku = new Sku($row['uid']);

            if (!$this->printsOnly) {
                $this->log('info', "Registering card [{$row['Card Name']} using identifier [{$this->identifier->raw()}]");

                $card = Card::register(
                    $this->identifier,
                    $row['Card Name'],
                    $this->imagePath($row),
                    Rarity::fromLss($row['Rarity']),
                    $row['Card Effect'],
                    '',
                    '',
                    $this->keywords($row),
                    $stats
                );
            } else {
                $card = Card::whereIdentifier($this->identifier)->first();
                
                if (!$card) {
                    $this->log('error', "Card not found for identifier [{$this->identifier->raw()}]");
                    continue;
                }
            }
            
            $printing = Printing::where('sku', $sku)->first();
            
            if ($printing && !$this->command->option('skip-existing')) {
                $this->log('info', "Registering print for sku [{$row['uid']}]");

                $this->createOrUpdatePrinting($card, $sku, $row);

                $this->log('info', "Updated print [$printing->id] for sku [{$row['uid']}]");
            }

            if (!$printing) {
                $printing = $this->createOrUpdatePrinting($card, $sku, $row);

                $this->log('info', "Registered print [$printing->id] for sku [{$row['uid']}]");
            }
        }
    }

    /**
     * Generate the keywords required.
     *
     * @param array $row
     * @return array
     */
    private function keywords($row)
    {
        return $this->weaponParts($row, Arr::flatten([
            explode(' ', Str::lower($row['Class'])),
            explode(' ', Str::lower($row['Card Type']))
        ]));
    }

    private function weaponParts($row, array $keywords)
    {
        // If the string contains brackets, it's a weapon - format as we require
        $possibleWeapon = $row['Card Sub-type'];

        if (Str::contains($possibleWeapon, ['(', ')'])) {
            $possibleWeapon = preg_replace('/[\(\)]/i', '', $possibleWeapon);
            $possibleWeapon = explode(' ', Str::lower($possibleWeapon));

            // Now we're splitting the weapon and size into separate keywords. Weapons may in
            // future may have spaces, hence this weird-looking operation below.
            $size = array_pop($possibleWeapon);
            $weapon = implode(' ', $possibleWeapon);

            $keywords[] = $weapon;
            $keywords[] = $size;
        } elseif (!empty($possibleWeapon)) {
            $keywords[] = Str::lower($possibleWeapon);
        }

        return $keywords;
    }

    private function stats($row)
    {
        return array_filter([
            'intellect' => (int) $row['Intellect'],
            'life' => (int) $row['Life'],
            'resource' => (int) $row['Pitch Value'],
            'cost' => (int) $row['Cost'],
            'defense' => (int) $row['Defense Value'],
            'attack' => (int) $row['Power'],
        ]);
    }

    private function copyImage($row)
    {
        $path = $this->imagePath($row);

        if (!Storage::disk('do')->exists($path)) {
            $this->log('info', "Copying image from [{$row['Product Image']}] to [$path]");
            try {
                Storage::disk('do')->put($path, file_get_contents($row['Product Image']));
            } catch (ErrorException $e) {
                $this->log("Error copying image for [{$row['uid']}] from [{$row['Product Image']}]: Missing file.");
            }
        } else {
            $this->log('warn', "Image already exists at [$path]");
        }
    }

    public function batchSize(): int
    {
        return 50;
    }

    public function conditionalSheets(): array
    {
        return array_map(function() {
            return $this;
        }, array_flip(self::AVAILABLE_SHEETS));
    }

    private function log(string $type, string $message)
    {
        $this->command->{$type}("[{$this->identifier->raw()}] {$message}");
    }

    /**
     * @param $row
     * @return string
     */
    private function imagePath($row): string
    {
        return "cards/printings/{$row['uid']}.png";
    }

    /**
     * @param Card $card
     * @param Sku $sku
     * @param $row
     * @return mixed
     */
    private function createOrUpdatePrinting(Card $card, Sku $sku, $row)
    {
        return Printing::register(
            $card->id,
            $sku,
            $row['Set Name'],
            Rarity::fromLss(trim($row['Rarity'])),
            new Edition($row['Edition']),
            $row['Finish'],
            'en',
            $row['Card Name'],
            $row['Card Effect'],
            ''
        );
    }
}
