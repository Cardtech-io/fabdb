<?php
namespace FabDB\Domain\Cards;

use ErrorException;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class CardsImport implements ToCollection, WithHeadingRow, WithBatchInserts, WithMultipleSheets
{
    use Importable;
    use WithConditionalSheets;

    private $availableSheets = [
        'ira_singles',
        'wtr_alpha_singles',
        'wtr_hero_singles',
        'wtr_unlimited_singles',
        'arc_first_singles',
        'arc_unlimited_singles',
        'cru_first_singles',
        'promo_singles'
    ];
    /**
     * @var Identifier
     */
    private $identifier;

    /**
     * @var bool
     */
    private $withImages;

    /**
     * @var Command
     */
    private $logger;

    public function __construct(Command $logger, bool $withImages)
    {
        $this->withImages = $withImages;
        $this->logger = $logger;
    }

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            if (!Arr::get($row, 'uid')) continue;

            $stats = $this->stats($row);

            $this->identifier = Identifier::fromName($row['card_name'], $stats);

            $this->log('Registering card.');

            // Next, we check to see if our account has an image for the card on DO. If not, we fetch from the google API
            if ($this->withImages) {
                $this->copyImage($row);
            }

            $card = Card::register(
                $id = Identifier::fromStats($row['card_name'], $stats),
                $this->cycle($row['uid']),
                $row['card_name'],
                $this->imagePath($row),
                Rarity::fromLss($row['rarity']),
                '',
                '',
                '',
                $this->keywords($row),
                $stats
            );

            $this->log("Registering print for sku [{$row['uid']}]");

            $printing = Printing::register(
                $card->id,
                new Sku($row['uid']),
                $row['set_name'],
                Rarity::fromLss($row['rarity']),
                new Edition($row['edition'])
            );

            $this->log("Registered print [$printing->id] for sku [{$row['uid']}]");
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
            Str::lower($row['class']),
            explode(' ', Str::lower($row['card_type']))
        ]));
    }

    private function weaponParts($row, array $keywords)
    {
        // If the string contains brackets, it's a weapon - format as we require
        $possibleWeapon = $row['card_sub_type'];

        if (Str::contains($possibleWeapon, ['(', ')'])) {
            $possibleWeapon = preg_replace('/[\(\)]/i', '', $possibleWeapon);
            $possibleWeapon = explode(' ', Str::lower($possibleWeapon));

            // Now we're splitting the weapon and size into separate keywords. Weapons may in
            // future may have spaces, hence this weird-looking operation below.
            $size = array_pop($possibleWeapon);
            $weapon = implode(' ', $possibleWeapon);

            $keywords[] = $weapon;
            $keywords[] = $size;
        }

        return $keywords;
    }

    private function stats($row)
    {
        return array_filter([
            'intellect' => $row['intellect'],
            'life' => $row['life'],
            'resource' => $row['pitch_value'],
            'cost' => $row['cost'],
            'defense' => $row['defense_value'],
            'attack' => $row['power'],
        ]);
    }

    private function copyImage($row)
    {
        $path = $this->imagePath($row);

        if (!Storage::disk('do')->exists($path)) {
            $this->log("Copying image for [{$row['uid']}] from [{$row['product_image']}] to [$path]");
            try {
                Storage::disk('do')->put($path, file_get_contents($row['product_image']));
            } catch (ErrorException $e) {
                $this->log("Error copying image for [{$row['uid']}] from [{$row['product_image']}]: Missing file.");
            }
        } else {
            $this->log("Image already exists for [{$row['uid']}] at [$path]");
        }
    }

    public function batchSize(): int
    {
        return 10;
    }

    public function conditionalSheets(): array
    {
        return [
            'ira_singles' => $this,
            'wtr_alpha_singles' => $this,
            'wtr_hero_singles' => $this,
            'wtr_unlimited_singles' => $this,
            'arc_first_singles' => $this,
            'arc_unlimited_singles' => $this,
            'cru_first_singles' => $this,
            'promo_singles' => $this
        ];
    }

    private function log(string $message)
    {
        $this->logger->info("[{$this->identifier->raw()}] {$message}");
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
     * The cycle determines the release cycle from the SKU. For example, WTR has both first and unlimited editions,
     * so WTR is a WTR cycle covering all those releases.
     *
     * @param string $uid
     * @return mixed
     */
    private function cycle(string $uid)
    {
        preg_match('/([a-z]{3})([0-9]{3})/i', $uid, $matches);

        return $matches[1];
    }

    public function except(array $sheets)
    {
        $this->onlySheets(...array_flip(Arr::except(array_flip($this->availableSheets), $sheets)));
    }

    public function only(array $sheets)
    {
        $this->onlySheets(...array_flip(Arr::only(array_flip($this->availableSheets), $sheets)));
    }
}
