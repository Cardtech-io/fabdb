<template>
    <tbody>
        <tr class="odd:bg-gray-100 hover:bg-white hidden sm:table-row">
            <td class="border border-gray-300"><router-link :to="'/collection/' + card.identifier" class="block py-2 px-4 w-full">{{ card.identifier }}</router-link></td>
            <td class="border border-gray-300"><router-link :to="'/collection/' + card.identifier" class="block py-2 px-4 w-full">{{ card.name }} <span v-if="hasResource(card)">({{ colourToText(card.stats.resource) }})</span></router-link></td>
            <td class="border border-gray-300 py-2 px-4 text-center">{{ card.rarity }}</td>
            <td class="border border-gray-300 text-center"><card-count :card="card" type="standard"></card-count></td>
            <td class="border border-gray-300 text-center"><card-count :card="card" type="foil"></card-count></td>
            <td class="border border-gray-300 text-center"><card-count :card="card" type="promo"></card-count></td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-white sm:hidden">
            <td class="border border-gray-300 py-2 px-4" colspan="5">{{ card.identifer }} {{ card.name }} <span v-if="hasResource(card)">({{ colourToText(card.stats.resource) }})</span></td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-white sm:hidden">
            <td class="border border-gray-300 text-center" colspan="5">
                <div class="flex">
                    <card-count :card="card" type="standard"></card-count>
                    <card-count :card="card" type="foil"></card-count>
                    <card-count :card="card" type="promo"></card-count>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import Cardable from './Cardable.js';
    import CardCount from '../Collection/CardCount.vue';

    export default {
        components: {
            CardCount
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
