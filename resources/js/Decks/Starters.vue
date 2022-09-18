<template>
    <div>
        <header-title title="Starter decks"></header-title>
        <div class="container mx-auto mt-8 sm:mt-0">
            <div class="px-4">
                <p class="text-gray-200 bg-semi-black p-4 rounded-lg leading-8">
                    <span class="block text-5xl font-serif uppercase float-left relative leading-3" style="top: 15px">L</span>ooking for the Official starter decks? Want to import them into TTS, or simply want to create your own
                    deck from them? Look no further! This page lists all of the official Flesh & Blood starter decks, as well as
                    providing all the usual features you've come to expect from FaB DB!
                </p>
            </div>
            <div class="flex flex-wrap mt-8 mx-2" v-if="decks.length">
                <div v-for="deck in decks" :key="decks.slug" class="w-full sm:w-1/2 md:w-1/4">
                    <starter-deck :deck="deck"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from "../Components/Breadcrumbs.vue";
    import Deck from "./Deck.js";
    import HeaderTitle from "../Components/HeaderTitle.vue";
    import LazyLoader from "../Components/LazyLoader.js";
    import Models from "../Utilities/Models.js";
    import StarterDeck from "./StarterDeck.vue";

    export default {
        components: {Breadcrumbs, HeaderTitle, StarterDeck},

        data() {
            return {
                crumbs: [
                    { text: 'Home', link: '/' },
                    { text: 'Starter decks' }
                ],

                decks: []
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/starters').then(response => {
                callback(function(){
                    this.decks = Models.hydrateMany(response.data, Deck);
                })
            });
        }),

        metaInfo() {
            return {
                title: 'Flesh and Blood TCG Starter Decks',
                meta: [
                    { vmid: 'description', name: 'description', content: 'View and purchase Flesh & Blood TCG starter decks, from cards on TCG Player.' }
                ]
            };
        }
    };
</script>
