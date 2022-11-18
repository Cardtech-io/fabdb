<?php
namespace FabDB\Domain\Cards\Importers;

use ErrorException;
use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Edition;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Printing;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Sku;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use function FabDB\Domain\Cards\str_contains;
use function FabDB\Domain\Cards\str_starts_with;

class LSSImport
{
    public function __construct(private Command $command, private $withImages, private bool $printsOnly = false, private ?string $ids = null) {}

    public function collection(Collection $rows)
    {
        if ($this->ids) {
            $ids = explode(',', $this->ids);
            $rows = $rows->filter(fn($row) => in_array($row['uid'], $ids));
        }

        foreach ($rows as $row) {
            if (!Arr::get($row, 'uid')) continue;

            if (Str::startsWith($row['uid'], 'XXX')) {
                $this->log('warn', "Tricky card, ignoring [{$row['uid']}]");
                continue;
            }

            // We skip any rows whereby we want to import an image, but no image exists.
            if ($this->withImages && isset($row['Product Image']) && empty($row['Product Image'])) {
                $this->log('warn', "Skipping [{$row['uid']}], missing image data.");
                continue;
            }

            $cards = $this->split($row);

            foreach ($cards as $record) {
                $stats = $this->stats($record);
                $sku = new Sku($record['uid']);

                $this->identifier = Identifier::fromLSS($record);

                $this->log('info', "Registering card [{$record['Card Name']} using identifier [{$this->identifier->raw()}]");

                // Next, we check to see if our account has an image for the card on DO. If not, we fetch from the google API
                if ($this->withImages !== null) {
                    $this->copyImage($record);
                }

                if (!$this->printsOnly) {
                    $card = Card::register(
                        $this->identifier,
                        $record['Card Name'],
                        $this->imagePath($sku->raw()),
                        Rarity::fromLss($record['Rarity']),
                        $record['Card Effect'],
                        '',
                        '',
                        $this->keywords($record),
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
                    $this->log('info', "Registering print for sku [{$record['uid']}]");

                    $this->createOrUpdatePrinting($card, $sku, $record);

                    $this->log('info', "Updated print [$printing->id] for sku [{$record['uid']}]");
                }

                if (!$printing) {
                    $printing = $this->createOrUpdatePrinting($card, $sku, $record);

                    $this->log('info', "Registered print [$printing->id] for sku [{$record['uid']}]");
                }
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

    private function copyImage(array $record): void
    {
        $sku = Sku::fromLSS($record['uid']);
        $localDir = base_path().'/'.$this->withImages;
        $importer = new ImageImporter($localDir, $sku, $record['back']);
        $localFile = $record['Product Image'] ?? $importer->requiredFile($record['Finish']);
        $serverPath = $importer->serverPath();

        if (!Storage::disk('do')->exists($serverPath)) {
            $this->log('info', "Copying image from [{$localFile}] to [$serverPath]");

            try {
                Storage::disk('do')->put($serverPath, file_get_contents($localFile));
            } catch (ErrorException $e) {
                $this->log('error', "Error copying image for [{$record['uid']}] from [{$localFile}]: Missing file.");
            }
        } else {
            $this->log('warn', "Image already exists at [$serverPath]");
        }
    }

    private function log(string $type, string $message)
    {
        $this->command->{$type}("[{$this->identifier->raw()}] {$message}");
    }

    /**
     * @param $row
     * @return string
     */
    private function imagePath(string $uid): string
    {
        return "cards/printings/{$uid}.png";
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

    /**
     * Some card rows have two printings listed in one record, for double-sided cards. This function looks for those values, and splits as necessary, returning 1-2 records.
     *
     * @param array $row
     * @return void
     */
    private function split(array $row): array
    {
        $cards = [];
        $required = 1;

        // Let's see how many cards we need to create, by looping through each of the row columns, and see if any
        // of them hint at a second printing on the same row.
        foreach ($row as $key => $value) {
            // Product image urls will naturally include // so exclude them from checks.
            if (strtolower($key) != 'product image' && Str::contains($value, '//')) {
                $required = 2;
                break;
            }
        }

        // Now we set whether or not the "card" is the back face
        Arr::set($cards, "0.back", false);

        if ($required === 2) {
            Arr::set($cards, "1.back", true);
        }

        // Now we loop through each column, and because we know how many cards we -need- to create, we effectively
        // split the row data into two records. If a given column value does not actually have two values, we
        // just use the first value. Additionally, we'll always create at least one card row as part of the split.
        foreach ($row as $column => $value) {
            if (strtolower($column) !== 'product image') {
                $values = explode('//', $value);
            }
            else {
                $values = [$value];
            }

            Arr::set($cards, "0.$column", trim($values[0]));

            if ($required == 2) {
                Arr::set($cards, "1.$column", trim($values[count($values)-1]));
            }
        }

        return $cards;
    }
}
