<template>
    <div>
        <deck-composition :cards="deck.cards"/>
    </div>
</template>

<script>
    import DeckComposition from "./DeckComposition";

    export default {
        props: {
            deck: {
                required: true
            }
        },

        components: {DeckComposition}
    }
</script>

<style scoped>

</style>
