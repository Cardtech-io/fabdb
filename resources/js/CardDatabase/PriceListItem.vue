<template>
    <tbody>
        <tr class="odd:bg-gray-100 hover:bg-gray-200">
            <td class="border border-gray-300 py-1 px-4">
                <sku-finish :sku="card.sku"></sku-finish>
            </td>
            <td class="border border-gray-300">
                <router-link :to="{ name: 'cards.view', params: { identifier: card.identifier } }" class="block py-1 px-4 w-full">
                    {{ card.name }}
                </router-link>
            </td>
            <td class="border border-gray-300 py-1 px-4 text-center"><rarity-symbol :rarity="card.rarity"></rarity-symbol></td>
            <td class="border border-gray-300 py-1 px-4 text-center"><price-movement :currency="card.currency" :current="card.lowCurrent" :previous="card.lowPrevious"></price-movement></td>
            <td class="border border-gray-300 py-1 px-4 text-center"><price-movement :currency="card.currency" :current="card.meanCurrent" :previous="card.meanPrevious"></price-movement></td>
            <td class="border border-gray-300 py-1 px-4 text-center"><price-movement :currency="card.currency" :current="card.highCurrent" :previous="card.highPrevious"></price-movement></td>
        </tr>
    </tbody>
</template>

<script>
    import Cardable from './Cardable.js';
    import PriceMovement from '../Components/PriceMovement.vue';
    import RaritySymbol from "./RaritySymbol";
    import SkuFinish from "./SkuFinish";
    import Strings from '../Utilities/Strings';

    export default {
        mixins: [Cardable, Strings],
        components: {PriceMovement, RaritySymbol, SkuFinish},

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
