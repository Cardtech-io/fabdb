<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards with a specific intellect value using <span class="example">i=</span>, <span class="example">int=</span> or <span class="example">intellect=</span> parameters.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="i<4" description="Find all cards that have less than 4 intellect (Hi, data doll!)"/>
        <x-search.params.example example="!intellect" description="Find all cards that have no intellect. Ie. not smart at all!"/>
    </x-slot:examples>
</x-search.params.param>
