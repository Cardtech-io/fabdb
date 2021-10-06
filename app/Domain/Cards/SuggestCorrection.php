<?php
namespace FabDB\Domain\Cards;

class SuggestCorrection
{
    private int $userId;
    private int $printingId;
    private string $name;
    private string $text;
    private string $comment;

    public function __construct(int $userId, int $printingId, string $name, string $text, string $comment)
    {
        $this->userId = $userId;
        $this->printingId = $printingId;
        $this->name = $name;
        $this->text = $text;
        $this->comment = $comment;
    }

    public function handle(PrintingRepository $printings)
    {
        Correction::suggest(
            $this->userId,
            $this->printingId,
            $this->name,
            $this->text,
            $this->comment
        );
    }
}
