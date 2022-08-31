<template>
    <section class="sm:flex sm:items-start" v-if="deck">
        <div class="block w-full sm:w-250 sm:m-0 flex-none">
            <router-link :to="{name: 'decks.view', params: {deck: deck.slug}}" class="block w-full">
                <card-image :card="deck.hero" class="w-full"/>
            </router-link>
        </div>
        <div class="p-4">
            <div class="flex items-center">
                <h1 class="block font-serif text-lg uppercase text-gray-300 mb-2">Deck of the week</h1>
                <deck-label :label="deck.label" class="text-xs px-2 py-1 -mt-1 ml-4 rounded-full"/>
                <format-label :format="deck.format" class="text-xs px-2 py-1 -mt-1 ml-1 rounded-full"/>
            </div>

            <div class="flex items-center font-serif text-4xl uppercase text-white">
                <h2>"{{deck.name}}"</h2>
                <format-icon :format="deck.format" class="inline-block relative ml-2" :size="8"></format-icon>
            </div>
            <p class="text-white">
                <span class="text-gray-400">by</span>
                <router-link :to="{name: 'user.profile.decks', params: {user: deck.user.slug}}" class="link">{{deck.authorName}}</router-link>
            </p>

            <p class="mt-4 mb-6 text-white">{{featured.excerpt}}</p>

            <router-link :to="{name: 'decks.view', params: {deck: deck.slug}}" class="inline-block button-secondary py-2 px-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                View deck
            </router-link>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import Models from "../../Utilities/Models";
    import Deck from "../Deck";
    import DeckLabel from "../Viewing/DeckLabel";
    import FormatLabel from "../Viewing/FormatLabel";
    import FormatIcon from "../Viewing/FormatIcon";

    export default {
        components: {DeckLabel, FormatIcon, FormatLabel},

        data() {
            return {
                deck: null,
                featured: null,
            }
        },

        mounted() {
            axios.get('/decks/featured').then(response => {
                this.deck = Models.hydrate(response.data, Deck);
                this.featured = {excerpt: response.data.excerpt, title: response.data.title};
            });
        }
    }
</script>
