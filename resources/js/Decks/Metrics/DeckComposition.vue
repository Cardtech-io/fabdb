<template>
    <div>
        <div class="md:flex md:space-x-4 w-full mb-4">
            <tile class="w-full md:w-1/4" title="Total cards">
                <h1 class="text-12xl text-center font-bold -mt-8">{{ cards.total() }}</h1>
            </tile>
            <tile class="w-full md:w-1/2" title="Deck composition">
                <composition :cards="cards" class="w-full h-200 md:h-180 py-2"/>
            </tile>
            <tile class="w-full md:w-1/4" title="Cost curve">
                <deck-curves :cards="cards" stat="cost" strategy="total" class="w-full h-200 md:h-180"/>
            </tile>
        </div>

        <div class="md:flex md:space-x-4 w-full mb-4">
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
            }
        }
    }
</script>
