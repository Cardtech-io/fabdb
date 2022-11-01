<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards that match a specific class using <span class="example">c=</span> or <span class="example">class=</span> parameters.</p>
        <p>If you're looking for cards that have no class, use <span class="example">c=none</span></p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="c=warrior" description="Find all cards that can be used in warrior decks."/>
        <x-search.params.example example="!class=generic,wizard" description="Find all cards that are anything but generic or wizard cards."/>
    </x-slot:examples>
</x-search.params.param>
