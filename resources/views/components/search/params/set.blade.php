<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards that were released in a specific set using <span class="example">s=</span> or <span class="example">set=</span> parameters.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="s=wtr" description="Find all cards that can be found in WTR."/>
    </x-slot:examples>
</x-search.params.param>
