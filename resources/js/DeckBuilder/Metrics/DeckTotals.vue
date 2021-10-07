<template>
    <div v-if="deck">
        <div v-if="deck.format === 'constructed'" class="flex items-center space-x-2">
            <div class="cursor-help group relative">
                <h2 class="font-serif uppercase text-xl border-b border-dotted border-gray-500"  :class="{ 'text-red-500': totalCards > maxCards }">{{totalMainDeck - 1 < 0 ? 0 : totalMainDeck - 1}}</h2>
                <span class="tooltip transition-all delay-200 absolute block opacity-0 group-hover:opacity-100 bg-black text-white py-1 px-3 z-25 rounded text-xs mt-2 whitespace-nowrap">Main deck</span>
            </div>
            <span class="font-serif uppercase text-xl">/</span>
            <div class="cursor-help group relative">
                <h2 class="font-serif uppercase text-xl border-b border-dotted border-gray-500"  :class="{ 'text-red-500': totalCards > maxCards }">{{totalSideboard}}</h2>
                <span class="tooltip transition-all delay-200 absolute block opacity-0 group-hover:opacity-100 bg-black text-white py-1 px-3 z-25 rounded text-xs mt-2 whitespace-nowrap">Sideboard</span>
            </div>
            <span class="font-serif uppercase text-xl">/</span>
            <div class="cursor-help group relative">
                <h2 class="font-serif uppercase text-xl border-b border-dotted border-gray-500"  :class="{ 'text-red-500': totalCards > maxCards }">{{maxCards - 1}}</h2>
                <span class="tooltip transition-all delay-200 absolute block opacity-0 group-hover:opacity-100 bg-black text-white py-1 px-3 z-25 rounded text-xs mt-2 whitespace-nowrap">Max cards</span>
            </div>
        </div>
        <div v-if="deck.format === 'blitz'" class="flex items-center space-x-2">
            <div class="cursor-help group relative">
                <h2 class="font-serif uppercase text-xl border-b border-dotted border-gray-500"  :class="{ 'text-red-500': totalCards > maxCards }">{{totalMainDeck - 1}}</h2>
                <span class="tooltip transition-all delay-200 absolute block opacity-0 group-hover:opacity-100 bg-black text-white py-1 px-3 z-25 rounded text-xs mt-2 whitespace-nowrap">Main deck</span>
            </div>
            <span class="font-serif uppercase text-xl">/</span>
            <div class="cursor-help group relative">
                <h2 class="font-serif uppercase text-xl border-b border-dotted border-gray-500"  :class="{ 'text-red-500': totalCards > maxCards }">{{maxCards - 1}}</h2>
                <span class="tooltip transition-all delay-200 absolute block opacity-0 group-hover:opacity-100 bg-black text-white py-1 px-3 z-25 rounded text-xs mt-2 whitespace-nowrap">Max cards</span>
            </div>
        </div>

        <div v-if="deck.format === 'open'" class="flex items-center space-x-2">
            <div class="cursor-help group relative">
                <h2 class="font-serif uppercase text-xl border-b border-dotted border-gray-500"  :class="{ 'text-red-500': totalCards > maxCards }">{{totalMainDeck - 1}}</h2>
                <span class="tooltip transition-all delay-200 absolute block opacity-0 group-hover:opacity-100 bg-black text-white py-1 px-3 z-25 rounded text-xs mt-2 whitespace-nowrap">Main deck</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Cards from "../Cards";

    export default {
        computed: {
            ...mapState('deck', ['cards', 'deck', 'sideboard']),

            maxCards() {
                return this.deck.format === 'blitz' ? 53 : 81;
            },

            totalCards() {
                let total = (new Cards(this.cards)).total();

                if (this.deck.format === 'blitz') {
                    total++;
                }

                return total;
            },

            totalSideboard() {
                return (new Cards(this.sideboard)).total();
            },

            totalMainDeck() {
                return this.totalCards - this.totalSideboard;
            }
        }
    }
</script>

<style scoped>
    .tooltip {
        left: -5px;
    }

    .tooltip:before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        border-bottom: 8px solid black;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        left: 3px;
        top: -7px;
    }
</style>
