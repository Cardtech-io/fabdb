<?php

namespace FabDB\Domain\Decks;

class NewVersionObserver
{
    private string $slug;

    public function deckCopied(string $slug)
    {
        $this->slug = $slug;
    }

    public function slug()
    {
        return $this->slug;
    }
}
