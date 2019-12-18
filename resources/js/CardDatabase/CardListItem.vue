<template>
    <tr class="odd:bg-gray-100 hover:bg-gray-200">
        <td class="border border-gray-300 py-2 px-4 hidden sm:table-cell">{{ card.identifier }}</td>
        <td class="border border-gray-300 py-2 px-4">{{ card.name }} <span v-if="hasResource(card)">({{ colourToText(card.stats.resource) }})</span></td>
        <td class="border border-gray-300 py-2 px-4 text-center"><card-count :card="card" type="standard"></card-count></td>
        <td class="border border-gray-300 py-2 px-4 text-center"><card-count :card="card" type="foil"></card-count></td>
        <td class="border border-gray-300 py-2 px-4 text-center"><card-count :card="card" type="promo"></card-count></td>
    </tr>
</template>

<script>
    import Cardable from './Cardable.js';
    import CardCount from '../Collection/CardCount.vue';
    import ManageCard from './ManageCard.vue';

    export default {
        components: {
            CardCount,
            ManageCard
        },

        mixins: [Cardable],

        props: {
            card: Object,
            view: String,
            path: String
        },

        methods: {
            viewUrl: function() {
                return this.path + '/' + this.card.identifier + '/';
            }
        }
    }
</script>