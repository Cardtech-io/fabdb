<template>
    <section v-if="decks">
        <header class="flex items-center py-2 px-4 rounded-lg overflow-hidden bg-black text-white">
            <h2 class="font-serif text-xl uppercase">Recent decks</h2>
            <router-link :to="{name: 'decks.browse', query: 'card='+this.card.identifier}" class="block flex items-center ml-auto rounded py-1 px-2 text-base button-primary">
                See more
                <icon :size="5" class="inline-block">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </icon>
            </router-link>
        </header>
        <div class="bg-gray-200 dark:bg-transparent rounded-b-lg overflow-hidden">
            <deck-item v-for="deck in decks" :deck="deck" :key="deck.slug" theme="light"/>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import DeckItem from "../DeckItem";
    import Models from "../../Utilities/Models";
    import Deck from "../Deck";

    export default {
        props: {
            card: {
                type: Object
            }
        },

        components: {DeckItem},

        data() {
            return {
                decks: []
            }
        },

        mounted() {
            axios.get('/decks/latest?per_page=3&card='+this.card.identifier+'&include=weapons').then(response => {
                this.decks = Models.hydrateMany(response.data.data, Deck);
            });
        }
    };
</script>
