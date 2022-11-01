<?php

namespace FabDB\View\Components\Search\Params;

use Illuminate\View\Component;

class Example extends Component
{
    public function __construct(public $example, public $description) {}

    public function render()
    {
        return view('components.search.params.example');
    }
}
