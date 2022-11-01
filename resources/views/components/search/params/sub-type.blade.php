<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>You can find cards of a given card subtype by using <span class="example">st=</span> or <span class="example">subtype=</span> parameters.</p>
        <p>Examples include item, attack.etc.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="st=item" description="Find all cards that have a card subtype of 'item'."/>
        <x-search.params.example example="!subtype=attack" description="Find all cards that do not have a card subtype of 'attack'."/>
    </x-slot:examples>
</x-search.params.param>
