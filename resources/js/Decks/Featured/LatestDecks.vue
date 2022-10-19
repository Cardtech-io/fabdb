<template>
    <section class="rounded-lg overflow-hidden" v-if="decks">
        <header class="flex items-center py-2 px-4 text-white" :class="color">
            <h2 class="font-serif text-xl uppercase">{{title}}</h2>
            <router-link :to="{name: 'decks.browse', query: queryParams()}" class="block flex items-center ml-auto rounded py-1 px-2 text-base" :class="buttonColors()">
                See more
                <icon :size="5" class="inline-block">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </icon>
            </router-link>
        </header>
        <div class="bg-gray-200 dark:bg-gray-900 rounded-b-lg">
            <router-link :to="{name: 'decks.view', params: {deck: deck.slug}}" v-for="deck in decks" class="flex items-center hover:bg-white dark:hover:bg-gray-700 px-4 py-2" :key="deck.slug">
                <hero-avatar :hero="deck.hero" width="90" class="hidden sm:block"/>
                <hero-avatar :hero="deck.hero" width="80" class="sm:hidden"/>
                <div class="ml-2">
                    <h3 class="font-serif text-lg uppercase h-8 overflow-hidden">{{deck.name}}</h3>
                    <p class="text-base">by {{deck.authorName}}</p>
                    <deck-label :label="deck.label" class="mr-1 text-xs px-2 sm:py-1 rounded-full"/>
                    <format-label :format="deck.format" class="mr-2 text-xs px-2 sm:py-1 rounded-full"/>
                </div>
                <div class="flex-none font-serif text-center ml-auto">
                    <div class="text-4xl">{{ deck.totalCards }}</div>
                    <div class="text-gray-400 text-base ml-1">cards</div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import DeckLabel from "../Viewing/DeckLabel.vue";
    import FormatLabel from "../Viewing/FormatLabel.vue";
    import HeroAvatar from "../../Components/HeroAvatar.vue";
    import Models from "../../Utilities/Models";
    import Deck from "../Deck.js";

    export default {
        props: {
            color: {
                type: String
            },

            title: {
                required: true,
                type: String
            },

            query: {
                type: String
            }
        },

        components: {DeckLabel, FormatLabel, HeroAvatar},

        data() {
            return {
                decks: []
            }
        },

        methods: {
            buttonColors() {
                let color = this.color.split('-');
                let scale = Number(color.pop());

                let background = color.join('-')+'-'+(scale+200);
                let hover = color.join('-')+'-'+(scale+100);

                return background+' hover:'+hover;
            },

            queryParams() {
                return Object.fromEntries((new URLSearchParams(this.query)).entries());
            }
        },

        mounted() {
            axios.get('/decks/latest?per_page=3&'+this.query).then(response => {
                this.decks = Models.hydrateMany(response.data.data, Deck);
            });
        }
    };
</script>
