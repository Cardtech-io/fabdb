<template>
    <div>
        <div class="container sm:mx-auto flex">
            <div class="p-8 py-10 md:px-0">
                <h1 class="font-serif text-white text-4xl uppercase">Deck Builder</h1>
            </div>
        </div>

        <div class="sm:mx-auto bg-orange-900 text-white font-serif uppercase p-4">
            <div class="container sm:mx-auto">
                <p class="">
                    <router-link to="/" class="text-white hover:text-orange-300">Home</router-link> <span class="text-orange-500">&gt;</span>
                    <span class="text-orange-300">Deck Builder</span>
                </p>
            </div>
        </div>

        <div class="border-gray-800 rounded-lg border mt-8">
            <h1 class="font-serif text-2xl p-4">My Decks</h1>

            <ol v-if="decks">
                <li class="border-gray-800 border-t p-4" v-for="deck in decks">
                    <router-link :to="'/deck-builder/' + deck.slug + '/'" class="link">{{ deck.name }}</router-link>
                </li>
            </ol>

            <add-deck @deck-added="addDeck"></add-deck>
        </div>
    </div>
</template>

<script>
    import AddDeck from './AddDeck.vue';

    export default {
        components: {AddDeck},

        data() {
            return {
                decks: null
            }
        },

        methods: {
            addDeck: function(deck) {
                this.decks.push(deck);
            }
        },

        mounted() {
            axios.get('/decks/mine/').then(response => {
                this.decks = response.data;
            });
        },

        metaInfo() {
            return {
                title: 'Deck builder'
            }
        }
    }
</script>
