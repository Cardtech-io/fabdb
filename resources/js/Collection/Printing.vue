<template>
    <div class="flex odd:bg-gray-100 hover:bg-gray-300 group hover:font-bold items-center space-x-4 p-1">
        <img :src="cardImageFromSku(printing.sku.sku, 50)" class="rounded-card"/>
        <div class="flex-grow">
            <div class="flex items-center space-x-1">
                <div class="font-bold">{{printing.card.name}}</div>
                <colour :resource="printing.card.stats.resource" v-if="printing.card.stats.resource"/>
            </div>
            <sku-finish :sku="printing.sku"></sku-finish>
            {{englishFinish(printing.sku.finish)}}
        </div>
        <div class="w-1/10">{{printing.sku.set.name}}</div>
        <div class="w-1/20 text-center rarity"><rarity-symbol :rarity="printing.rarity"></rarity-symbol></div>
        <div class="w-1/10"><card-count :printing="printing"></card-count></div>
        <div class="w-1/20 text-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 focus:outline-none" v-model="printing.trade" @click="toggle(printing, 'trade')">
        </div>
        <div class="w-1/20 text-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500 focus:outline-none" v-model="printing.want" @click="toggle(printing, 'want')">
        </div>
    </div>
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
