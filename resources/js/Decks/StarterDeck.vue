<template>
    <div class="mx-2 bg-semi-black bg-semi-black p-4 rounded-xl">
        <card-image :card="deck.hero"></card-image>
        <div class="flex mt-2">
            <router-link :to="{ name: 'decks.view', params: { deck: deck.slug } }" class="block button-primary w-1/2 text-center px-4 py-3 rounded mr-4">View</router-link>
        </div>
    </div>
</template>

<script>
    import CardImage from "../CardDatabase/CardImage";
    import Deck from "./Deck";

    export default {
        props: {
            deck: {
                required: true,
                type: Deck
            }
        }
    };
</script>
