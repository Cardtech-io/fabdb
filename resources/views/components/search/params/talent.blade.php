<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards that match a given talent using <span class="example">ta=</span> or <span class="example">talent=</span> parameters.</p>
        <p>If you're looking for cards that have no talent, use <span class="example">t=none</span></p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="ta=ice" description="Find all ice cards."/>
        <x-search.params.example example="!talent=light,shadow" description="Find all cards that have anything but light or shadow talents."/>
    </x-slot:examples>
</x-search.params.param>
