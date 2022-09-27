<template>
    <div class="w-full p-4">
        <tabs>
            <tab-item name="Composition">
                <deck-composition :deck="deck" :cards="cards"/>
            </tab-item>
            <tab-item name="Performance">

            </tab-item>
            <tab-item name="Raw">
                <raw-stats :deck="deck" :cards="cards"/>
            </tab-item>
        </tabs>
    </div>
</template>

<script>
    import DeckComposition from "./DeckComposition.vue";
    import RawStats from "../../DeckBuilder/Metrics/RawStats.vue";
    import TabItem from "../../Components/TabItem.vue";
    import Tabs from "../../Components/Tabs.vue";
    import Cards from "../../DeckBuilder/Cards";

    export default {
        components: {DeckComposition, RawStats, TabItem, Tabs},

        props: {
            deck: {
                required: true,
                type: Object,
            }
        },

        computed: {
            cards() {
                return this.deck.cards instanceof Cards ? this.deck.cards : new Cards(this.deck.cards);
            }
        }
    }
</script>
