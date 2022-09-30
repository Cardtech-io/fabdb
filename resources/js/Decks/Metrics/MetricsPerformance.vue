<template>
    <div class="w-full">
        <tabs>
            <tab-item name="Composition">
                <deck-composition :deck="deck" :cards="cards"/>
            </tab-item>
            <tab-item name="Performance">
                <performance :deck="deck"></performance>
            </tab-item>
            <tab-item name="Raw">
                <raw-stats :deck="deck" :cards="cards"/>
            </tab-item>
        </tabs>
    </div>
</template>

<script>
    import DeckComposition from "./DeckComposition.vue";
    import RawStats from "./RawStats.vue";
    import TabItem from "../../Components/TabItem.vue";
    import Tabs from "../../Components/Tabs.vue";
    import Cards from "../../DeckBuilder/Cards";
    import Performance from "./Performance.vue";

    export default {
        components: {DeckComposition, RawStats, TabItem, Tabs, Performance},

        props: {
            deck: {
                required: true,
                type: Object,
            },
        },

        computed: {
            cards() {
                return this.deck.cards instanceof Cards ? this.deck.cards : new Cards(this.deck.cards);
            }
        }
    }
</script>
