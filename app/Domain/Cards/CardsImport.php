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
    private $withImages;
    private Command $command;
    private bool $printsOnly;

    public function __construct(Command $command, $withImages, bool $printsOnly = false)
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
            $sku = new Sku($row['uid']);

            $this->identifier = Identifier::fromLSS($row);

            // Next, we check to see if our account has an image for the card on DO. If not, we fetch from the google API
            if ($this->withImages !== null) {
                $this->copyImage($sku);
            }

            if (!$this->printsOnly) {
                $this->log('info', "Registering card [{$row['Card Name']} using identifier [{$this->identifier->raw()}]");

                $card = Card::register(
                    $this->identifier,
                    $row['Card Name'],
                    $this->imagePath($sku->raw()),
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

    private function copyImage(Sku $sku)
    {
        $serverPath = $this->imagePath($sku->raw());
        $localPath = base_path().'/'.$this->withImages.'/'.$sku->set()->raw().$sku->cardNumber().'.png';

        if (!Storage::disk('do')->exists($serverPath)) {
            $this->log('info', "Copying image from [{$localPath}] to [$serverPath]");
            try {
                Storage::disk('do')->put($serverPath, file_get_contents($localPath));
            } catch (ErrorException $e) {
                $this->log('error', "Error copying image for [{$sku->raw()}] from [{$localPath}]: Missing file.");
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
}
