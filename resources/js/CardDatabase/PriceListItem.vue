<template>
    <tbody>
        <tr class="odd:bg-gray-100 hover:bg-gray-200 hidden sm:table-row">
            <td class="border border-gray-300">
                <router-link :to="{ name: 'cards.view', params: { identifier: card.identifier } }" class="block py-2 px-4 w-full">
                    <span class="text-gray-200 text-xs p-1 rounded mr-2 cursor-default" :class="card.variant" :title="variant">{{ card.identifier }}</span>
                    {{ card.name }} <span v-if="hasResource(card) && card.rarity != 'M'">({{ colourToText(card.stats.resource) }})</span>
                </router-link>
            </td>
            <td class="border border-gray-300 py-2 px-4 text-center">{{ card.rarity }}</td>
            <td class="border border-gray-300 py-2 px-4 text-center"><price-movement :currency="card.currency" :current="card.currentHigh" :previous="card.previousHigh"></price-movement></td>
            <td class="border border-gray-300 py-2 px-4 text-center"><price-movement :currency="card.currency" :current="card.currentMean" :previous="card.previousMean"></price-movement></td>
            <td class="border border-gray-300 py-2 px-4 text-center"><price-movement :currency="card.currency" :current="card.currentLow" :previous="card.previousLow"></price-movement></td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-gray-200 sm:hidden">
            <td class="border border-gray-300 py-2 px-4" colspan="5">
                <span class="text-gray-200 text-xs p-1 rounded mr-2 cursor-default" :class="card.variant" :title="variant">{{ card.identifier }}</span>
                {{ card.name }}
                <span v-if="hasResource(card) && card.rarity != 'M'">({{ colourToText(card.stats.resource) }})</span>
            </td>
        </tr>
        <tr class="even:bg-gray-100 hover:bg-gray-200 sm:hidden">
            <td class="border border-gray-300 text-center" colspan="5">
                <div class="flex">
                    <div class="flex-1 p-2"><price-movement :currency="card.currency" :current="card.currentHigh" :previous="card.previousHigh"></price-movement></div>
                    <div class="flex-1 p-2 border-l border-r border-gray-300"><price-movement :currency="card.currency" :current="card.currentMean" :previous="card.previousMean"></price-movement></div>
                    <div class="flex-1 p-2"><price-movement :currency="card.currency" :current="card.currentLow" :previous="card.previousLow"></price-movement></div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import Cardable from './Cardable.js';
    import PriceMovement from '../Components/PriceMovement.vue';
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [Cardable, Strings],
        components: { PriceMovement },

        props: {
            card: Object,
            view: String,
            path: String
        },

        computed: {
            variant() {
                if (this.card.variant == 'regular') {
                    return 'Regular';
                }

                return this.ucfirst(this.card.variant) + ' foil';
            }
        },

        methods: {
            viewUrl: function() {
                return this.path + '/' + this.card.identifier + '/';
            }
        }
    }
</script>