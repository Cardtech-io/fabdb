<?php

namespace FabDB\Domain\Practise;

use FabDB\Domain\Cards\Set;

class SetupPractise
{
    private int $userId;
    private Format $format;
    private Set $set;
    private SetupObserver $observer;

    public function __construct(SetupObserver $observer, int $userId, Format $format, Set $set)
    {
        $this->observer = $observer;
        $this->userId = $userId;
        $this->format = $format;
        $this->set = $set;
    }

    public function handle(PractiseRepository $practises)
    {
        $practise = Practise::setup($this->userId, $this->format, $this->set);

        $practises->save($practise);

        $this->observer->practiseSetup($practise);
    }
}
