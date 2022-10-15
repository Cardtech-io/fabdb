<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards with a specified pitch or resource value using <span class="example">p=</span>, <span class="example">resource=</span> or <span class="example">pitch=</span> parameters.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="p>2" description="Find all cards that provide more than 2 resources when pitched."/>
        <x-search.params.example example="!resource=2" description="Find all cards that provide more either 1 or 3 resources when pitched."/>
    </x-slot:examples>
</x-search.params.param>
