<template>
    <div>
        <header-title title="Deck builder"></header-title>
        <div class="container mx-auto sm:px-4">
            <div class="crumbs flex items-center px-4">
                <crumbs :crumbs="crumbs" class="py-4 font-serif uppercase"></crumbs>
                <add-deck class="flex-initial ml-auto" name="New deck">
                    <span class="hidden sm:block">New deck</span>
                    <span class="block sm:hidden">+</span>
                </add-deck>
            </div>
        </div>
        <div class="container sm:px-4 sm:mx-auto">
            <div class="bg-white p-4">
                <deck-search @search-completed="refreshResults" :mine="true"></deck-search>
            </div>
            <div class="bg-gray-200 sm:p-4">
                <div v-if="user">
                    <table class="w-full table-auto border-collapse bg-white">
                        <thead>
                            <tr class="text-base">
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left">Deck</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase hidden lg:table-cell">Parent</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left hidden sm:table-cell">Class</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left hidden md:table-cell">Cards</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase hidden sm:table-cell">Last updated</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase"><span class="hidden lg:block">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-gray-100 hover:bg-white" v-for="deck in decks">
                                <td class="border border-gray-300">
                                    <div class="flex items-center">
                                        <img :src="squareThumbUrl(deck.hero.image, 43)" v-if="deck.hero">
                                        <router-link :to="{name: 'decks.build', params: {deck: deck.slug}}" class="block px-4 py-2 link-alternate">{{deck.name}}</router-link>
                                    </div>
                                </td>
                                <td class="border border-gray-300 p-2 px-4 hidden lg:table-cell">
                                    <router-link :to="{name: 'decks.build', params: {deck: deck.parent.slug}}" class="block link-alternate" v-if="deck.parent">{{deck.parent.name}}</router-link>
                                </td>
                                <td class="border border-gray-300 p-2 px-4 hidden sm:table-cell">{{deck.hero ? $settings.game.classes[deck.hero.class] : ''}}</td>
                                <td class="border border-gray-300 p-2 px-4 hidden md:table-cell">{{deck.totalCards}}</td>
                                <td class="border border-gray-300 p-2 px-4 hidden sm:table-cell">{{deck.updatedAt}}</td>
                                <td class="border border-gray-300 p-2 px-4">
                                    <div class="flex justify-center items-center">
                                        <button @click="copyDeck(deck)">
                                            <icon :size="5">
                                                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                            </icon>
                                        </button>
                                        <button @click="removeDeck(deck)">
                                            <icon :size="5">
                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                            </icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <paginator :results="response" @page-selected="refresh" class="py-4"></paginator>
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
    import Deck from "../Decks/Deck";
    import DeckItem from "../Decks/DeckItem";
    import DeckSearch from "../Decks/DeckSearch";
    import LazyLoader from "../Components/LazyLoader";
    import Models from "../Utilities/Models";
    import Paginator from "../Components/Paginator";
    import Sorter from "../Components/Sorter";
    import Imagery from "../Utilities/Imagery";

    export default {
        mixins: [Imagery],
        components: {AddDeck, Collapser, Crumbs, DeckItem, DeckSearch, Paginator, Sorter},

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
                decks: [],
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
                    this.$emit('refresh');
                });
            },

            removeDeck(deck, key) {
                const confirm = window.confirm('Are you sure you want to remove this deck? This action is not reversible.');

                if (confirm) {
                    axios.delete('/decks/' + deck.slug).then(response => {
                        this.decks.splice(key, 1);
                    });
                }
            },

            refreshResults(response) {
                this.response = response.data;
                this.decks = Models.hydrateMany(response.data.data, Deck);
            }
        },

        metaInfo() {
            return {
                title: 'Flesh & Blood Deck builder',
                description: 'Create and customise tournament-winning decks for Flesh & Blood TCG.'
            }
        }
    }
</script>
