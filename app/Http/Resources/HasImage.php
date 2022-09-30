<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Search\Identifiable;
use FabDB\Domain\Cards\Sku;
use Illuminate\Support\Str;

trait HasImage
{
    use Identifiable;

    protected function defaultImage($image)
    {
        return $this->url("/{$image}?w=400&fit=clip&auto=compress&auto=compress,format");
    }

    protected function baseImage($image)
    {
        return $this->url("/$image?auto=compress,format");
    }

    protected function alteredImage($image, $request)
    {
        $width = $request->get('width', 400);

        return $this->url("/{$image}?w=$width&fit=clip&auto=compress,format");
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
        return $this->url("/cards/printings/{$sku}.png?w=400&fit=clip&auto=compress,format");
    }

    protected function cardBackImage($cardBack)
    {
        return $this->url("/cards/backs/card-back-{$cardBack}.png?w=400&fit=clip&auto=compress,format");
    }

    protected function url($path)
    {
        return 'https://'.config('services.imgix.domain').$path;
    }
}
