<template>
    <div class="container px-4 sm:mx-auto text-white md:flex">
        <div class="py-8 md:my-20 md:w-1/2 sm:pr-8">
            <h1 class="font-serif text-4xl lg:text-4xl uppercase">Deck Builder</h1>
            <p class="mt-4">The first and only Flesh &amp; Blood Deck Builder is here. You can create, craft, modify or remove your decks
                for constructed play, and then export them to PDF for tournament registration!</p>

            <p class="mt-4">If you're a <router-link to="/support" class="link-white">supporter</router-link>, you'l get access to our premium deck builder.</p>
        </div>

        <div class="md:my-20 md:flex-grow md:w-1/2">
            <div v-if="user">
                <div class="flex pb-4">
                    <h1 class="font-serif text-white text-4xl uppercase flex-1">Decks</h1>
                    <div class="flex-1"><add-deck @deck-added="addDeck"></add-deck></div>
                </div>

                <ol v-if="decks">
                    <li class="bg-semi-black rounded-lg mb-2 hover:bg-black" v-for="(deck, key) in decks">
                        <div class="flex">
                            <router-link :to="'/decks/build/premium/' + deck.slug" class="block link-white flex-1 p-4" v-if="user.subscription">{{ deck.name }}</router-link>
                            <router-link :to="'/decks/build/' + deck.slug" class="block link-white p-4 pr-0" v-else>{{ deck.name }}</router-link>
                            <span v-if="user.subscription">
                                <router-link :to="'/decks/build/' + deck.slug" class="block link-white p-4 pr-0">Classic</router-link>
                            </span>
                            <router-link :to="'/decks/test/' + deck.slug" class="block link-white p-4 pr-0" title="Test deck">Test</router-link>
                            <a href="" class="block link-white p-4" @click.prevent="removeDeck(deck, key)" title="Delete deck">Delete</a>
                        </div>
                    </li>
                </ol>
            </div>
            <p v-else>The deck builder is available to registered users only, so if you do not yet have an account, you
                must <router-link to="/login" class="link">register or login</router-link>.</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import AddDeck from './AddDeck.vue';

    export default {
        components: {AddDeck},

        computed: {
            ...mapGetters('session', ['user'])
        },

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
            if (!this.user) return;

            axios.get('/decks/mine/').then(response => {
                this.decks = response.data;
            });
        },

        metaInfo() {
            return {
                title: 'Flesh & Blood Deck builder',
                description: 'Create and customise tournament-winning decks for Flesh & Blood TCG.'
            }
        }
    }
</script>
