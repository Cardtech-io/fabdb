<template>
    <div class="md:flex w-full md:space-x-4 md:flex-wrap">
        <div class="md:w-1/4 mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden h-200 flex flex-col items-center justify-center p-4">
            <h1 class="text-8xl text-center">{{ cards.total() }}</h1>
            <span class="text-center">cards</span>
        </div>

        <div class="md:w-1/2 bg-gray-100 dark:bg-gray-700 p-2 md:p-4 rounded-lg h-200">
            <composition :cards="cards" class="w-full h-180"/>
        </div>

<!--        <div class="md:w-1/3">-->
<!--            <h3 class="font-serif uppercase text-2xl">Totals</h3>-->
<!--            <totals/>-->
<!--        </div>-->

<!--        <div class="mt-4 md:mt-0 md:w-1/3 md:mx-4">-->
<!--            <h3 class="font-serif uppercase text-2xl">General</h3>-->
<!--            <general/>-->
<!--        </div>-->

<!--        <div class="mt-4 md:mt-0 md:w-1/3 md:mx-4">-->
<!--            <h3 class="font-serif uppercase text-2xl">Offensive</h3>-->
<!--            <ol class="mt-2 text-base">-->
<!--                <stat :value="offenseRating" text="Rating" position="top"/>-->
<!--                <stat :value="averageAttack" text="Average attack"/>-->
<!--                <stat :value="attacksPerHand" text="Attacks per hand" position="bottom"/>-->
<!--            </ol>-->

<!--            <h3 class="font-serif uppercase text-2xl mt-4 md:mt-8">Defensive</h3>-->
<!--            <ol class="mt-2 text-base">-->
<!--                <stat :value="defenseRating" text="Rating" position="top"/>-->
<!--                <stat :value="averageBlock" text="Average block" position="bottom"/>-->
<!--            </ol>-->
<!--        </div>-->
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import Composition from "../../DeckBuilder/Metrics/Composition.js";
    import General from "../../DeckBuilder/Metrics/General.vue";
    import Stat from "../../DeckBuilder/Metrics/Stat.vue";
    import Totals from "../../DeckBuilder/Metrics/Totals.vue";
    import Viewable from "../../DeckBuilder/Viewable.js";
    import Cards from "../../DeckBuilder/Cards";

    export default {
        components: {Composition, General, Totals, Stat},
        mixins: [Viewable],

        computed: {
            ...mapState('deck', ['deck']),

            cards() {
                return new Cards(this.deck.cards);
            },

            offenseRating() {
                return (((this.totalAttackActions + this.totalAttackReactions) / this.totalCards).toFixed(2) * 100).toFixed(0) + '%';
            },

            defenseRating() {
                return ((this.blocks.length / this.totalCards).toFixed(2) * 100).toFixed(0) + '%';
            },
        }
    }
</script>
