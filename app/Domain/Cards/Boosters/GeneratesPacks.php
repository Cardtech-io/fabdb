<?php
namespace FabDB\Domain\Cards\Boosters;

use Illuminate\Support\Collection;

trait GeneratesPacks
{
    protected function tokens(): Collection
    {
        $tokens = $this->box->getTokens(2);

        // If the tokens contains a bauble, we only return that one card, as it's not double-sided
        $bauble = $tokens->filter(function($card) {
            return $card->name === 'Cracked Bauble';
        });

        return $bauble->count() ? $bauble : $tokens;
    }
}
