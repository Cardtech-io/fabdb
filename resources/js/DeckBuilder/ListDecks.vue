<template>
    <div class="container px-4 sm:mx-auto text-white md:flex">
        <div class="py-8 md:my-20 md:w-1/2 sm:pr-8">
            <h1 class="font-serif text-4xl lg:text-4xl uppercase">Deck Builder</h1>
            <p class="mt-4">
                The first and only Flesh &amp; Blood Deck Builder is here. You can build your decks
                for constructed or blitz formats, and then export them to PDF for tournament registration, or
                integration with Tabletop Simulator.
            </p>

            <p class="mt-45">
                <router-link to="/support" class="link">Supporters</router-link> gain access to
                premium deck builder features, the deck tester and more.
            </p>

            <router-link to="/support" class="appearance-none block w-full mt-2 bg-red-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-red-500 text-center mt-8" v-if="user && !user.subscription">Upgrade to premium</router-link>
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
                            <router-link :to="'/decks/build/' + deck.slug" class="block link flex-1 p-4 pr-0">{{ deck.name }}</router-link>
                            <router-link :to="'/decks/test/' + deck.slug" class="block link p-4 pr-0" title="Test deck">Test</router-link>
                            <a href="" class="block p-4" @click.prevent="copyDeck(deck)" title="Copy deck" :class="{ 'text-gray-500': copyDisabled, 'link': !copyDisabled }">Copy</a>
                            <a href="" class="block link p-4" @click.prevent="removeDeck(deck, key)" title="Delete deck">Delete</a>
                        </div>
                    </li>
                </ol>

                <paginator :results="response" @page-selected="search"></paginator>
            </div>
            <p v-else>The deck builder is available to registered users only, so if you do not yet have an account, you
                must <router-link to="/login" class="link">register or login</router-link>.</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import AddDeck from './AddDeck';
    import LazyLoader from "../Components/LazyLoader";
    import Paginator from "../Components/Paginator";

    export default {
        components: {AddDeck, Paginator},

        computed: {
            ...mapGetters('session', ['user'])
        },

        data() {
            return {
                copyDisabled: false,
                decks: null,
                response: {},
                page: 1,
            };
        },

        methods: {
            copyDeck(deck) {
                if (this.copyDisabled) return;

                this.copyDisabled = true;

                setTimeout(() => {
                    this.copyDisabled = false;
                }, 3000);

                axios.post('/decks/copy', { deck: deck.slug }).then(response => {
                    this.search(1);
                });
            },

            removeDeck(deck, key) {
                const confirm = window.confirm('Are you sure you want to remove this deck? This action is not reversible.');

                if (confirm) {
                    axios.delete('/decks/' + deck.slug).then(response => {
                        this.decks.splice(key, 1);
                        this.search(this.page);
                    });
                }
            },

            search(page) {
                this.page = page;

                axios.get('/decks/mine?page='+page).then(response => {
                    this.response = response.data;
                    this.decks = response.data.data;
                });
            }
        },

        metaInfo() {
            return {
                title: 'Flesh & Blood Deck builder',
                description: 'Create and customise tournament-winning decks for Flesh & Blood TCG.'
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/mine').then(response => {
                callback(function() {
                    this.response = response.data;
                    this.decks = response.data.data;
                });
            });
        })
    }
</script>
