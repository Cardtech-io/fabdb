<template>
    <div>
        <div class="md:flex md:space-x-4 w-full mb-4 space-y-4 md:space-y-0">
            <tile class="w-full md:w-1/4" title="Total cards">
                <h1 class="text-12xl text-center font-bold leading-none my-4 md:-mt-4">{{ cards.deckTotal(deck.format) }}</h1>
            </tile>
            <tile class="w-full md:w-1/2" title="Deck composition">
                <composition :deck="deck" :cards="cards" class="w-full h-200 md:h-180 p-2"/>
            </tile>
            <tile class="w-full md:w-1/4" title="Cost curve">
                <deck-curves :cards="cards" stat="cost" strategy="total" class="w-full h-200 md:h-180 p-2"/>
            </tile>
        </div>

        <div class="md:flex md:space-x-4 w-full mb-4 space-y-4 md:space-y-0">
            <tile class="w-full md:w-1/3" title="Pitch curve">
                <deck-curves :cards="cards.withResource()" stat="resource" strategy="total" class="w-full h-200 md:h-180 p-2"/>
            </tile>
            <tile class="w-full md:w-1/3" title="Offensive potential">
                <attack-power :cards="cards.withPower()" class="w-full h-200 md:h-180 p-2"/>
            </tile>
            <tile class="w-full md:w-1/3" title="Defensive capabilities">
                <defense :cards="cards.withDefense()" class="w-full h-200 md:h-180 p-2"/>
            </tile>
        </div>
    </div>
</template>

<script>
    import AttackPower from "./AttackPower.js";
    import Cards from "../../DeckBuilder/Cards.js";
    import Composition from "./Composition.js";
    import DeckCurves from "../../DeckBuilder/DeckCurves.js";
    import Defense from "./Defense.js";
    import General from "./General.vue";
    import Stat from "./Stat.vue";
    import Tile from "./Tile.vue";
    import Totals from "./Totals.vue";
    import Viewable from "../../DeckBuilder/Viewable.js";

    export default {
        components: {AttackPower, DeckCurves, Defense, Composition, General, Tile, Totals, Stat},
        mixins: [Viewable],

        props: {
            deck: {
                required: true,
                type: Object,
            },

            cards: {
                required: true,
                type: Cards
            }
        }
    }
</script>
