<template>
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
                <li class="border-black border-t py-4" v-for="(deck, key) in decks">
                    <div class="flex">
                        <div class="flex-1">
                            <router-link :to="'/deck-builder/' + deck.slug + '/'" class="link">{{ deck.name }}</router-link>
                        </div>
                        <div class="flex-1 text-right">
                            <a href="" class="text-gray-400 hover:text-white" @click.prevent="removeDeck(deck, key)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="inline-block fill-current h-4 w-5 align-middle">
                                    <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </li>
            </ol>
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
            },

            removeDeck: function(deck, key) {
                const confirm = window.confirm('Are you sure you want to remove this deck? This action is not reversible.');

                if (confirm) {
                    axios.delete('/decks/' + deck.slug).then(response => {
                        this.decks.splice(key, 1);
                    });
                }
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
