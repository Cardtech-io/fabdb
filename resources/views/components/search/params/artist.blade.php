<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>You can find cards with art curated by a specific artist using the <span class="example">artist=</span> parameter.</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="artist=Adolfo" description="Find all cards that have art created by Adolfo Navarro."/>
    </x-slot:examples>
</x-search.params.param>
