<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Rarity;
use Illuminate\Support\Collection;

trait GeneratesPacks
{
    protected function tokens(): Collection
    {
        $tokens = $this->box->getTokens(2);

        // If the tokens contain a bauble, we only return that one card, as it's not double-sided
        $bauble = $tokens->filter(function($card) {
            return $card->name === 'Cracked Bauble';
        });

        return $bauble->count() ? $bauble : $tokens;
    }

    protected function randomRarity(bool $withSuperRares): Rarity
    {
        if ($withSuperRares) {
            $weighting = [
                'R' => [0, 75],
                'S' => [76, 92],
                'M' => [93, 100]
            ];
        } else {
            $weighting = [
                'R' => [0, 75],
                'M' => [76, 100]
            ];
        }

        $roll = rand(0, 100);

        foreach ($weighting as $rarity => $chance) {
            if ($roll >= $chance[0] && $roll <= $chance[1]) {
                return new Rarity($rarity);
            }
        }
    }
}
