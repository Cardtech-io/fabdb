<template>
    <li class="odd:bg-gray-100 even:bg-gray-200 sm:bg-transparent sm:odd:bg-transparent sm:float-left sm:p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <a href="" @click.prevent="action(card)" class="block hover:bg-white px-4 py-2 w-full sm:hidden">
            <span>{{ card.name }}</span> <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span><br>
            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
            <span v-for="(keyword, index) in card.keywords" class="text-sm">{{ ucfirst(keyword) }}<span v-if="index < card.keywords.length - 1">, </span></span>
        </a>

        <img :src="cardUrl(card.identifier, 350)" :alt="card.name" :title="card.name" class="w-full rounded-xl hidden sm:block cursor-pointer" @click.prevent="action(card)">
    </li>
</template>

<script>
    import Cardable from '../CardDatabase/Cardable';

    export default {
        mixins: [Cardable],

        props: ['action', 'card']
    }
</script>