<template>
    <div>
        <div class="container sm:mx-auto text-white">
            <div class="p-8 pb-0 lg:float-left lg:p-0 lg:w-1/3 lg:pr-8 lg:py-20">
                <h1 class="font-serif text-4xl lg:text-4xl uppercase">Deck Builder</h1>
                <p>The first and only Flesh & Blood Deck Builder is here. You can create, craft, modify or remove your decks for constructed play.</p>
            </div>

            <div class="m-8 lg:float-left lg:w-2/3 bg-semi-black rounded-lg p-8 lg:m-0 lg:my-20">
                <div class="flex pb-8">
                    <h1 class="font-serif text-white text-4xl uppercase flex-1">Decks</h1>
                    <div class="flex-1"><add-deck @deck-added="addDeck"></add-deck></div>
                </div>

                <ol v-if="decks" class="border-black border-b">
                    <li class="border-black border-t py-4" v-for="deck in decks">
                        <router-link :to="'/deck-builder/' + deck.slug + '/'" class="link">{{ deck.name }}</router-link>
                    </li>
                </ol>
            </div>
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
