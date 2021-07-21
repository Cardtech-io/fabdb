<template>
    <div>
        <header-title title="Deck builder"></header-title>
        <div class="container mx-auto px-4">
            <div class="crumbs rounded-t-xl overflow-hidden flex items-center px-4">
                <crumbs :crumbs="crumbs" class="py-4 font-serif uppercase"></crumbs>
                <add-deck class="flex-initial ml-auto" name="New deck" label="New deck"></add-deck>
            </div>
        </div>
        <div class="container px-4 sm:mx-auto">
            <div class="px-4 bg-gray-200">
                <div v-if="user">
                    <ol v-if="decks">
                        <li class="bg-semi-black backdrop-blur-2 rounded-lg mb-1 hover:bg-black" v-for="(deck, key) in decks">
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
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import AddDeck from '../Decks/AddDeck';
    import Collapser from "../Components/Collapser";
    import Crumbs from "../Components/Crumbs";
    import LazyLoader from "../Components/LazyLoader";
    import Paginator from "../Components/Paginator";

    export default {
        components: {AddDeck, Collapser, Crumbs, Paginator},

        computed: {
            ...mapGetters('session', ['user'])
        },

        data() {
            return {
                copyDisabled: false,
                crumbs: [
                    { text: 'Home', link: { name: 'home' } },
                    { text: 'Deck builder'},
                ],
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
