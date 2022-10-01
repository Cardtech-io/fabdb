<template>
    <div>
        <header class="flex mb-2 justify-end space-x-4">
            <selector :width="150" title="View" :default="view">
                <template v-slot:items="slotProps">
                    <selector-item value="me" :selected="slotProps.selected" @item-selected="view => setView({view})">Mine</selector-item>
                    <selector-item value="author" :selected="slotProps.selected" @item-selected="view => setView({view})">Deck author</selector-item>
                    <selector-item value="community" :selected="slotProps.selected" @item-selected="view => setView({view})">Community</selector-item>
                </template>
            </selector>
            <selector :width="170" title="Window" :default="window">
                <template v-slot:items="slotProps">
                    <selector-item :value="30" :selected="slotProps.selected" @item-selected="window => setWindow({window})">Last 30 games</selector-item>
                    <selector-item :value="100" :selected="slotProps.selected" @item-selected="window => setWindow({window})">Last 100 games</selector-item>
                </template>
            </selector>
        </header>
        <div class="md:flex md:space-x-4">
            <div class="space-y-4 md:w-2/3 mb-4">
                <div class="md:flex md:space-x-4 space-y-4 md:space-y-0">
                    <tile class="w-full md:w-1/2" title="Win rate">
                        <win-rate :slug="deck.slug"/>
                    </tile>
                    <tile class="w-full md:w-1/2" title="First/second turn win rate">
                        <first-second-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
                    </tile>
                </div>

                <tile class="w-full" title="Win rate by class">
                    <class-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
                </tile>

                <tile class="w-full" title="Win rate by hero">
                    <hero-win-rate :slug="deck.slug" class="w-full h-200 md:h-180 p-2" />
                </tile>
            </div>
            <div class="md:w-1/3">
                <tile title="Card stats">
                    <card-stats :slug="deck.slug"/>
                </tile>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex';
import Tile from "./Tile.vue";
import CardStats from "./CardStats.vue";
import ClassWinRate from "./ClassWinRate.js";
import FirstSecondWinRate from "./FirstSecondWinRate.js";
import HeroWinRate from "./HeroWinRate.js";
import WinRate from "./WinRate.vue";
import SelectorItem from "../../Components/SelectorItem.vue";
import Selector from "../../Components/Selector.vue";

export default {
    components: {
        CardStats,
        ClassWinRate,
        HeroWinRate,

        FirstSecondWinRate,
        Selector,
        SelectorItem,
        Tile,
        WinRate
    },

    props: {
        deck: {
            required: true,
            type: Object,
        },
    },

    computed: {
        ...mapState('performance', ['view', 'window'])
    },

    methods: {
        ...mapMutations('performance', ['setDeck', 'setView', 'setWindow'])
    },

    created() {
        this.setDeck({deck: this.deck.slug});
    }
};
</script>
