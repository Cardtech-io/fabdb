<template>
    <div class="pb-8 pt-4 w-full">
        <grouped-cards :cards="cards" group-id="cards"></grouped-cards>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Cards from "../DeckBuilder/Cards";
    import GroupedCards from "./GroupedCards";

    export default {
        components: {GroupedCards},
        props: ['packs'],

        computed: {
            ...mapState('draft', ['filters']),

            cards() {
                let cards = new Cards(this.packs.flat());

                if (this.filters.length) {
                    cards = cards.applyFilters(this.filters);
                }

                return cards.sort();
            }
        }
    }
</script>
