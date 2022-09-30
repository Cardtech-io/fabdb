<template>
    <div>
        <ol class="mt-2 text-base">
            <stat :value="averageCost" text="Avg cost" position="top"></stat>
            <stat :value="averagePitch" text="Avg pitch"></stat>
            <stat :value="pitchCount(1)" text="Pitch 1"></stat>
            <stat :value="pitchCount(2)" text="Pitch 2"></stat>
            <stat :value="pitchCount(3)" text="Pitch 3"></stat>
            <stat :value="costCount(0)" text="Cost 0"></stat>
            <stat :value="costCount(1)" text="Cost 1"></stat>
            <stat :value="costCount(2)" text="Cost 2"></stat>
            <stat :value="costCount(3)" text="Cost 3+" position="bottom"></stat>
        </ol>
    </div>
</template>

<script>
    import Stat from "./Stat.vue";
    import Viewable from "../../DeckBuilder/Viewable.js";
    import Cards from "../../DeckBuilder/Cards";

    export default {
        mixins: [Viewable],
        components: {Stat},

        props: {
            cards: {
                required: true,
                type: Cards
            }
        },

        computed: {
            averageCost() {
                const cards = this.cards.withCost();
                const totalOther = cards.total();
                const totalCost = cards.reduce((total, card) => total + card.stats.cost * card.total, 0);

                return (totalOther ? (totalCost / totalOther) : 0).toFixed(2);
            },

            averagePitch() {
                const cards = this.cards.withResource();
                const totalOther = cards.total();
                const totalPitch = cards.reduce((total, card) => total + (card.stats.resource * card.total), 0);

                return (totalOther ? (totalPitch / totalOther) : 0).toFixed(2)
            },
        },

        methods: {
            costCount(cost) {
                const cards = this.cards.deck().filter(card => cost < 3 ? card.stats.cost == cost : card.stats.cost >= cost);

                return cards.reduce((total, card) => {
                    return total + card.total;
                }, 0);
            },

            pitchCount(type) {
                const cards = this.cards.other().filter(card => card.stats.resource == type);

                return cards.reduce((total, card) => {
                    return total + card.total;
                }, 0);
            },
        }
    }
</script>
