<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <p class=""><router-link to="/" class="link">Home</router-link> <span class="text-gray-600">&gt;</span> Deck builder</p>
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
        }
    }
</script>
