<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards with a given attack or power value using <span class="example">a=</span>,
            <span class="example">attack=</span>, <span class="example">pow=</span> or
            <span class="example">power=</span> parameters.
        </p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="pow>=4" description="Find all cards that attack for 4 or more power."/>
        <x-search.params.example example="a<3 c=ninja" description="Find all cards that might best suit Benji lol"/>
    </x-slot:examples>
</x-search.params.param>
