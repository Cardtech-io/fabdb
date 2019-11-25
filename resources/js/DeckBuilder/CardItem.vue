<template>
    <a href="" @click.prevent="action(card)" class="block hover:bg-black p-2 w-full">
        <span>{{ card.name }}</span> <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card)"></span><br>
        <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
        <span v-for="(keyword, index) in card.keywords" class="text-sm">{{ ucfirst(keyword) }}<span v-if="index < card.keywords.length - 1">, </span></span>
    </a>
</template>

<script>
    import Cardable from '../CardDatabase/Cardable';

    export default {
        mixins: [Cardable],

        props: ['action', 'card']
    }
</script>