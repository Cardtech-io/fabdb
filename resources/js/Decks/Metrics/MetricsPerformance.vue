<template>
    <div class="w-full">
        <tabs>
            <tab-item name="Composition">
                <deck-composition/>
            </tab-item>
            <tab-item name="Performance">

            </tab-item>
            <tab-item name="Raw stats">
                <raw-stats/>
            </tab-item>
        </tabs>
    </div>
</template>

<script>
    import DeckComposition from "./DeckComposition.vue";
    import RawStats from "../../DeckBuilder/Metrics/RawStats.vue";
    import TabItem from "../../Components/TabItem.vue";
    import Tabs from "../../Components/Tabs.vue";
    import Viewable from "../../DeckBuilder/Viewable.js";

    export default {
        mixins: [Viewable],
        components: {DeckComposition, RawStats, TabItem, Tabs}
    }
</script>
