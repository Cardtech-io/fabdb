<template>
    <div class="pb-8 pt-4 w-full">
        <grouped-cards :cards="cards" group-id="cards"></grouped-cards>
    </div>
</template>

<script>
    import Cards from "../DeckBuilder/Cards";
    import GroupedCards from "./GroupedCards";

    export default {
        components: {GroupedCards},
        props: ['packs'],

        computed: {
            cards() {
                return new Cards(this.packs.flat()).sort();
            }
        }
    }
</script>
