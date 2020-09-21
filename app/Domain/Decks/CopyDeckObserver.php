<?php

namespace FabDB\Domain\Decks;

class CopyDeckObserver
{
    /**
     * @var string
     */
    private $original;

    /**
     * @var string
     */
    private $copied;

    public function deckWasCopied(string $original, string $copied)
    {
        $this->original = $original;
        $this->copied = $copied;
    }

    public function original(): string
    {
        return $this->original;
    }

    public function copied(): string
    {
        return $this->copied;
    }
}
