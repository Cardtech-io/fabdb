<?php
namespace FabDB\Domain\Practise;

class SetupObserver
{
    /**
     * @var Practise
     */
    private Practise $practise;

    public function practiseSetup(Practise $practise)
    {
        $this->practise = $practise;
    }

    public function practise(): Practise
    {
        return $this->practise;
    }
}
