<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards that match a specific rarity using <span class="example">r=</span> or <span class="example">rarity=</span> parameters.</p>
        <p class="text-sm">Valid values include: R, C, M, S, T, P, L and F</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="r=c" description="Find all cards that are common."/>
    </x-slot:examples>
</x-search.params.param>
