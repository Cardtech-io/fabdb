<template>
    <div>
        <header-title title="Starter decks"></header-title>
        <div class="container mx-auto">
            <div class="px-4">
                <p class="text-gray-400 bg-semi-black p-4 rounded-lg leading-8">
                    <span class="block text-5xl font-serif uppercase float-left relative leading-3" style="top: 15px">L</span>ooking for the Official starter decks? Want to import them into TTS, or simply want to create your own
                    deck from them? Look no further! This page lists all of the official Flesh & Blood starter decks, as well as
                    providing all the usual features you've come to expect from FaB DB!
                </p>
            </div>
            <div class="flex flex-wrap mt-8 mx-2" v-if="decks.length">
                <div v-for="deck in decks" :key="decks.slug" class="w-1/4">
                    <starter-deck :deck="deck"></starter-deck>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from "../Components/Breadcrumbs";
    import Deck from "./Deck";
    import HeaderTitle from "../Components/HeaderTitle";
    import LazyLoader from "../Components/LazyLoader";
    import Models from "../Utilities/Models";
    import StarterDeck from "./StarterDeck";

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
        })
    };
</script>
