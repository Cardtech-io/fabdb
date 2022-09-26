<template>
    <div>
        <tabs>
            <tab-item name="Composition">
                <deck-composition/>
            </tab-item>
            <tab-item name="Performance">

            </tab-item>
        </tabs>
    </div>
</template>

<script>
    import DeckComposition from "./DeckComposition.vue";
    import TabItem from "../../Components/TabItem.vue";
    import Tabs from "../../Components/Tabs.vue";

    export default {
        components: {DeckComposition, TabItem, Tabs}
    }
</script>

<style scoped>

</style>
