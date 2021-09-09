<template>
    <div class="mb-4">
        <h2 class="text-lg uppercase font-serif mb-4">Latest decks including {{card.name}}</h2>
        <router-link :to="{name: 'decks.view', params: {deck: deck.slug}}" v-for="deck in decks" class="flex items-center hover:bg-gray-100 pr-4 mb-2 rounded-full" :key="deck.slug">
            <hero-avatar :hero="deck.hero" width="90" class="hidden sm:block"></hero-avatar>
            <hero-avatar :hero="deck.hero" width="80" class="sm:hidden"></hero-avatar>
            <div class="ml-2">
                <h3 class="font-serif text-lg uppercase">{{deck.name}}</h3>
                <p class="text-base">by {{deck.authorName}}</p>
                <deck-label :label="deck.label" class="mr-1 text-xs px-2 sm:py-1 rounded-full"></deck-label>
                <format-label :format="deck.format" class="mr-2 text-xs px-2 sm:py-1 rounded-full"></format-label>
            </div>
            <div class="flex-none font-serif text-center ml-auto">
                <div class="text-4xl">{{ deck.totalCards }}</div>
                <div class="text-gray-400 text-base ml-1">cards</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import Deck from "../Decks/Deck";
    import DeckLabel from "../Decks/Viewing/DeckLabel";
    import FormatLabel from "../Decks/Viewing/FormatLabel";
    import HeroAvatar from "../Components/HeroAvatar";
    import Models from "../Utilities/Models";

    export default {
        props: {
            card: {
                required: true,
                type: Object
            }
        },

        components: {DeckLabel, FormatLabel, HeroAvatar},

        data: () => ({
            decks: []
        }),

        mounted() {
            axios.get('/decks?card='+this.card.identifier+'&per_page=5').then(response => {
                this.decks = Models.hydrateMany(response.data.data, Deck);
            });
        }
    }
</script>
