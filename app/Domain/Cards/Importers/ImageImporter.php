<?php

namespace FabDB\Domain\Cards\Importers;

use FabDB\Domain\Cards\Sku;

class ImageImporter
{
    public function __construct(private string $localDir, private Sku $sku, private bool $backFace) {}

    public function serverPath(): string
    {
        return "cards/printings/{$this->sku}.png";
    }

    /**
     * Returns the desired required file for the import/copy.
     *
     * @param string $finish
     * @return string
     */
    public function requiredFile(string $finish): string
    {
        $files = $this->availableFiles($this->localDir, $this->sku);

        return $files[$this->fileKey()];
    }

    /**
     * Returns files for the requested card number.
     *
     * @param string $path
     * @param Sku $sku
     * @return array
     */
    private function availableFiles(string $path, Sku $sku): array
    {
        // Get files that match the requested file
        $files = glob($path.'/*', GLOB_NOSORT);
        $files = array_filter($files, fn($file) => str_contains(strtolower($file), strtolower($sku->cardId())));

        $matched = [];

        foreach ($files as $file) {
            $info = pathinfo($file);
            $matched[strtolower($info['filename'])] = $file;
        }

        return $matched;
    }

    /**
     * Constructs the key necessary to fetch the required file from the array of files.
     *
     * @return string
     */
    private function fileKey(): string
    {
        $key = $this->sku->cardId();
        $finish = $this->sku->finish()->raw();

        if (str_contains(strtolower($finish), 'marvel')) {
            $key .= '_marvel';
        }

        if ($this->backFace) {
            $key .= '_back';
        }

        return $key;
    }
}
