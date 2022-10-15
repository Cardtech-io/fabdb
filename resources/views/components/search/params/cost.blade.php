<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards with a specified cost using <span class="example">co=</span> or <span class="example">cost=</span> parameters.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="cost>=2" description="Find all cards that have a cost greater than 2."/>
    </x-slot:examples>
</x-search.params.param>
