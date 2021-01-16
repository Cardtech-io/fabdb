<template>
    <div class="mx-2 bg-semi-black bg-semi-black p-4 mb-4 rounded-xl">
        <card-image :card="deck.hero"></card-image>
        <div class="flex justify-center mt-2 text-base">
            <a href="" class="block button-primary w-1/4 text-center px-3 py-2 rounded-l">Buy</a>
            <router-link :to="{ name: 'decks.view', params: { deck: deck.slug } }" class="block button-secondary w-1/4 text-center px-3 py-2 rounded-r">View</router-link>
        </div>
    </div>
</template>

<script>
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
