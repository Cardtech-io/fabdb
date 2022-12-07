<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards that match a specific finish using <span class="example">f=</span> or <span class="example">finish=</span> parameters.</p>
        <p class="text-sm">Valid values include: r, rf, cf, gf, mv, aa, ea, regular, rainbow foil, cold, cold foil, gold, gold foil, golden, marvel, alternative, extended.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="f=rf" description="Find all cards that have a rainbow foil printing."/>
        <x-search.params.example example="finish=mv,golden" description="Find all cards that have a marvel printing, or a golden foil printing."/>
    </x-slot:examples>
</x-search.params.param>
