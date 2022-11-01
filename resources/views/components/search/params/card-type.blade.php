<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>You can find cards of a given card type by using <span class="example">t=</span> or <span class="example">type=</span> parameters.</p>
        <p>Examples include equipment, action, hero.etc.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="type=equipment" description="Find all cards that have a card type of 'equipment'."/>
        <x-search.params.example example="!type=action" description="Find all cards that do not have a card type of 'action'."/>
    </x-slot:examples>
</x-search.params.param>
