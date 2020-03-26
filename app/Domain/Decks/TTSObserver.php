<?php
namespace FabDB\Domain\Decks;

class TTSObserver
{
    /** @var string */
    private $json;

    public function send(string $json)
    {
        $this->json = $json;
    }

    public function json(): string
    {
        return $this->json;
    }
}