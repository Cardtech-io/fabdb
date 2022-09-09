<template>
    <div>
        <h3 class="py-2 px-4 font-serif uppercase text-2xl">{{heading}} ({{cards.total()}})</h3>
        <ol>
            <li v-for="(card, index) in cards" class="p-2 pl-4 odd:bg-gray-100 dark:odd:bg-gray-700">
                <deck-card :card="card" :collapse="true" :use-router="false"/>
            </li>
        </ol>
    </div>
</template>

<script>
    import Cards from "../../DeckBuilder/Cards";
    import DeckCard from "../DeckCard";

    export default {
        props: {
            cards: {
                type: Cards,
                required: true
            },
            heading: {
                type: String,
                required: true
            }
        },

        components: {DeckCard}
    }
</script>
