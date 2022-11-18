<x-search.params.param>
    <x-slot:title>{{$param->title()}}</x-slot:title>

    <x-slot:description>
        <p>Find cards that match a given name. Note, that you can also use wildcards for non-exact searches:</p>
    </x-slot:description>

    <x-slot:examples>
        <x-search.params.example example="n=Dorinthea" description="Find all cards named exactly Dorinthea."/>
        <x-search.params.example example="n=*Dorinthea*" description="Find all cards that have the word Dorinthea in the name."/>
        <x-search.params.example example="c=warrior t=weapon !n=*Dawn*" description="Find all warrior weapon cards do not have the word 'Dawn' in its name."/>
    </x-slot:examples>
</x-search.params.param>
