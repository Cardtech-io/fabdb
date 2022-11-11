<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find all cards that match a given term, such as "axe".</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="axe" description="Find all cards have the word, 'axe'."/>
        <x-search.params.example example="!dominate" description="Find all cards that do not have the keyword, 'dominate'."/>
    </x-slot:examples>
</x-search.params.param>
