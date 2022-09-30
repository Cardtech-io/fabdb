<template>
    <div class="md:flex">
        <div class="md:w-1/3">
            <h3 class="font-serif uppercase text-2xl">Totals</h3>
            <totals :cards="cards" :deck="deck"/>
        </div>

        <div class="mt-4 md:mt-0 md:w-1/3 md:mx-4">
            <h3 class="font-serif uppercase text-2xl">General</h3>
            <general :cards="cards"/>
        </div>

        <div class="mt-4 md:mt-0 md:w-1/3 md:mx-4">
            <h3 class="font-serif uppercase text-2xl">Offensive</h3>
            <ol class="mt-2 text-base">
                <stat :value="offenseRating" text="Rating" position="top"/>
                <stat :value="cards.averageAttack()" text="Average attack"/>
                <stat :value="cards.attacksPerHand()" text="Attacks per hand" position="bottom"/>
            </ol>

            <h3 class="font-serif uppercase text-2xl mt-4 md:mt-8">Defensive</h3>
            <ol class="mt-2 text-base">
                <stat :value="defenseRating" text="Rating" position="top"/>
                <stat :value="cards.averageBlock()" text="Average block" position="bottom"/>
            </ol>
        </div>
    </div>
</template>

<script>
import Totals from "./Totals.vue";
import Stat from "./Stat.vue";
import General from "./General.vue";
import Cards from "../../DeckBuilder/Cards";

export default {
    components: {General, Stat, Totals},

    props: {
        deck: {
            required: true,
            type: Object,
        },

        cards: {
            required: true,
            type: Cards
        }
    },

    computed: {
        total() {
            return this.deck.format === 'constructed' ? this.cards.total() - 1 : this.cards.total();
        },

        offenseRating() {
            return (((this.cards.attackActions().total() + this.cards.attackReactions().total()) / this.total).toFixed(2) * 100).toFixed(0) + '%';
        },

        defenseRating() {
            return ((this.cards.withDefense().total() / this.total).toFixed(2) * 100).toFixed(0) + '%';
        }
    }
}
</script>
