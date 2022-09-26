<template>
    <div>
        <div class="md:flex md:-mx-2 w-full mb-4">
            <tile class="w-full md:w-1/4">
                <h1 class="text-8xl text-center font-bold">{{ total }}</h1>
                <span class="text-center">cards</span>
            </tile>
            <tile class="w-full md:w-1/2" title="Deck composition">
                <composition :cards="cards" class="w-full h-200 md:h-180 py-2"/>
            </tile>
            <tile class="w-full md:w-1/4" title="Cost curve">
                <deck-curves :cards="cards" stat="cost" strategy="total" class="w-full h-200 md:h-180"/>
            </tile>
        </div>

        <div class="md:flex md:-mx-2 w-full mb-4">
            <tile class="w-full md:w-1/3" title="Pitch curve">
                <deck-curves :cards="cards.withResource()" stat="resource" strategy="total" class="w-full h-200 md:h-180"/>
            </tile>
            <tile class="w-full md:w-1/3" title="Offensive potential">
                <attack-power :cards="cards.withPower()" class="w-full h-200 md:h-180"/>
            </tile>
            <tile class="w-full md:w-1/3" title="Defensive capabilities">
                <defense :cards="cards.withDefense()" class="w-full h-200 md:h-180 py-2"/>
            </tile>
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
    import AttackPower from "../../DeckBuilder/Metrics/AttackPower.js";
    import Cards from "../../DeckBuilder/Cards.js";
    import Composition from "../../DeckBuilder/Metrics/Composition.js";
    import DeckCurves from "../../DeckBuilder/DeckCurves.js";
    import Defense from "../../DeckBuilder/Metrics/Defense.js";
    import General from "../../DeckBuilder/Metrics/General.vue";
    import Stat from "../../DeckBuilder/Metrics/Stat.vue";
    import Tile from "../../DeckBuilder/Metrics/Tile.vue";
    import Totals from "../../DeckBuilder/Metrics/Totals.vue";
    import Viewable from "../../DeckBuilder/Viewable.js";

    export default {
        components: {AttackPower, DeckCurves, Defense, Composition, General, Tile, Totals, Stat},
        mixins: [Viewable],

        computed: {
            ...mapState('deck', ['deck']),

            cards() {
                return new Cards(this.deck.cards);
            },

            total() {
                return this.deck.format === 'constructed' ? this.cards.total() - 1 : this.cards.total();
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
