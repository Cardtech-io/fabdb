<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards with a specified life value using <span class="example">l=</span>, or <span class="example">life=</span> parameters.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="l<20" description="Find all cards that have less than 20 life."/>
        <x-search.params.example example="!life" description="Find all cards that do not have a life value."/>
    </x-slot:examples>
</x-search.params.param>
