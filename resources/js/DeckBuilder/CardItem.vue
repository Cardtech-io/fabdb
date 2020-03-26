<template>
    <li class="odd:bg-gray-100 even:bg-gray-200 sm:bg-transparent sm:odd:bg-transparent sm:float-left sm:p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <a href="" @click.prevent="action(card)" class="block hover:bg-white px-4 py-2 w-full sm:hidden">
            <span>{{ card.name }}</span> <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span><br>
            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
            <span v-for="(keyword, index) in card.keywords" class="text-sm">{{ ucfirst(keyword) }}<span v-if="index < card.keywords.length - 1">, </span></span>
        </a>

        <card-image :card="card" :clickHandler="action"></card-image>
    </li>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';

    export default {
        mixins: [Cardable],
        props: ['action', 'card'],
        components: { CardImage },

        computed: {
            ...mapGetters('session', ['user'])
        }
    }
</script>