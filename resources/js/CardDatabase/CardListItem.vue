<template>
    <tbody>
        <tr class="odd:bg-gray-200">
            <td class="border border-gray-300 font-bold py-1 text-lg" colspan="7"><router-link :to="'/collection/' + card.identifier" class="block py-1 px-2 w-full">{{ card.name }} <span v-if="hasResource(card)">({{ colourToText(card.stats.resource) }})</span></router-link></td>
        </tr>
        <tr class="odd:bg-gray-100 hover:bg-white" v-for="printing in card.printings">
            <td class="border border-gray-300 px-2 sm:pl-8 text-right"><span :class="printing.sku.finish" class="inline-block text-sm text-white px-1 mr-1 rounded-sm" :title="printing.sku.finish">{{ printing.sku.sku }}</span></td>
            <td class="border border-gray-300 px-2 hidden sm:table-cell">{{ englishFinish(printing.sku.finish) }}</td>
            <td class="border border-gray-300 px-2 hidden sm:table-cell">{{ printing.sku.set.name }}</td>
            <td class="border border-gray-300 px-2 hidden text-center sm:table-cell"><rarity-symbol :rarity="card.rarity"></rarity-symbol></td>
            <td class="border border-gray-300 text-center"><card-count :printing="printing"></card-count></td>
            <td class="border border-gray-300 text-center py-2 align-middle">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 focus:outline-none" v-model="printing.trade" @click="toggle(printing, 'trade')">
            </td>
            <td class="border border-gray-300 text-center py-2 align-middle">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 focus:outline-none" v-model="printing.want" @click="toggle(printing, 'want')">
            </td>
        </tr>
    </tbody>
</template>

<script>
    import axios from 'axios';
    import Cardable from './Cardable.js';
    import CardCount from '../Collection/CardCount.vue';
    import Icon from "../Components/Icon";
    import RaritySymbol from "./RaritySymbol";

    export default {
        components: {
            CardCount,
            Icon,
            RaritySymbol,
        },

        mixins: [Cardable],

        props: {
            card: Object,
            path: String
        },

        methods: {
            viewUrl() {
                return this.path + '/' + this.card.identifier + '/';
            },

            toggle(printing, type) {
                axios.post('/collection/'+printing.sku.sku+'/'+type);
            }
        }
    }
</script>
