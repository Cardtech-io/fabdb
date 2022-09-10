<template>
    <tr class="odd:bg-gray-100 hover:bg-gray-300 dark:odd:bg-gray-700 group dark:hover:bg-gray-600 hover:font-bold items-center p-1">
        <td width="50"><img :src="cardImageFromSku(printing.sku.sku, 50)" class="rounded-card cursor-help" v-preview-card="{stack: [printing.card], index: 0}"/></td>
        <td class="pl-2 sm:pl-4">
            <div class="flex items-center space-x-1">
                <div class="font-bold cursor-help help-underline" v-preview-card="{stack: [printing.card], index: 0}">{{printing.card.name}}</div>
                <colour :resource="printing.card.stats.resource" v-if="printing.card.stats.resource"/>
            </div>
            <sku-finish :sku="printing.sku"></sku-finish>
            {{englishFinish(printing.sku.finish)}}
        </td>
        <td class="hidden md:table-cell w-1/10">{{printing.sku.set.name}}</td>
        <td class="hidden sm:table-cell w-1/20 text-center rarity"><rarity-symbol :rarity="printing.rarity"/></td>
        <td class="w-1/4 md:w-1/10 flex-shrink-0"><card-count :printing="printing"/></td>
        <td class="w-1/10 md:w-1/20 text-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 focus:outline-none" v-model="printing.trade" @click="toggle(printing, 'trade')">
        </td>
        <td class="w-1/10 md:w-1/20 text-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 focus:outline-none" v-model="printing.want" @click="toggle(printing, 'want')">
        </td>
    </tr>
</template>

<script>
    import axios from 'axios';
    import Cardable from '../CardDatabase/Cardable.js';
    import CardCount from './CardCount.vue';
    import Icon from "../Components/Icon";
    import RaritySymbol from "../CardDatabase/RaritySymbol";
    import Imagery from "../Utilities/Imagery";
    import Colour from "../DeckBuilder/Colour";

    export default {
        components: {
            CardCount,
            Colour,
            Icon,
            RaritySymbol,
        },

        mixins: [Cardable, Imagery],

        props: {
            printing: Object
        },

        methods: {
            toggle(printing, type) {
                axios.post('/collection/'+printing.sku.sku+'/'+type);
            }
        }
    }
</script>
