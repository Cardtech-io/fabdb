<template>
    <div class="mx-2 bg-semi-black bg-semi-black p-4 sm:p-2 mb-4 rounded-xl">
        <card-image :card="deck.hero"/>
        <div class="flex justify-center mt-2 text-base">
            <a :href="buyLink(deck)" class="block button-primary w-1/2 text-center px-3 py-2 rounded-l mr-1" target="_blank">Buy</a>
            <router-link :to="{ name: 'decks.view', params: { deck: deck.slug } }" class="block button-secondary w-1/2 text-center px-3 py-2 rounded-r">View</router-link>
        </div>
    </div>
</template>

<script>
    import Cardable from "../CardDatabase/Cardable";
    import Deck from "./Deck";

    export default {
        props: {
            deck: {
                required: true,
                type: Deck
            }
        },

        mixins: [Cardable]
    };
</script>
