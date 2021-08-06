<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Search\Identifiable;
use FabDB\Domain\Cards\Sku;
use Illuminate\Support\Str;

trait HasImage
{
    use Identifiable;

    protected function defaultImage($card)
    {
        $domain = config('services.imgix.domain');

        return "https://$domain/{$card->image}?w=350&fit=clip&auto=compress";
    }

    /**
     * Returns true if a printing image should be used over the default.
     *
     * @return boolean
     */
    protected function usePrintingImage(string $keywords, string $sku): bool
    {
        if (!$this->matchesIdentifier($keywords)) return false;

        foreach ($this->identifiers($keywords) as $identifier) {
            if ($sku === $identifier) return true;
        }

        return false;
    }

    protected function printingImage(string $sku): string
    {
        $domain = config('services.imgix.domain');

        return "https://$domain/cards/printings/{$sku}.png?w=300&fit=clip&auto=compress";
    }
}
