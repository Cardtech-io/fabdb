<template>
    <div>
        <header-title title="Deck builder"/>

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
            <form class="bg-white p-4 block sm:flex w-full" @submit.prevent="newSearch">
                <div class="w-full mb-1 sm:mb-0 sm:w-1/3 sm:pr-1">
                    <select v-model="params.class" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option value="">Select class</option>
                        <option :value="k" v-for="(c, k) in $settings.game.classes">{{ c }}</option>
                    </select>
                </div>

                <div class="w-full mb-1 sm:mb-0 sm:w-1/3 sm:pr-1">
                    <select v-model="params.format" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg">
                        <option value="">Format</option>
                        <option value="blitz">Blitz</option>
                        <option value="constructed">Constructed</option>
                        <option value="open">Open</option>
                    </select>
                </div>

                <div class="sm:w-1/3">
                    <submit text="Search" class="w-full"></submit>
                </div>
            </form>

            <div class="bg-gray-200 p-4 sm:p-0">
                <div v-if="user">
                    <table class="w-full table-auto border-collapse bg-white">
                        <thead>
                            <tr class="text-base">
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left">Deck</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left hidden lg:table-cell">Label</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left hidden lg:table-cell">Parent</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left hidden sm:table-cell">Class</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left hidden md:table-cell">Cards</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase text-left hidden sm:table-cell">Last updated</th>
                                <th class="border border-gray-300 p-2 px-4 font-serif uppercase"><span class="hidden lg:block">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-gray-100 group hover:bg-gray-600 hover:text-white" v-for="(deck, key) in decks">
                                <td class="border border-gray-300">
                                    <router-link :to="{name: 'decks.build', params: {deck: deck.slug}}" class="block flex items-center">
                                        <img :src="squareThumbUrl(deck.hero.image, 43)" v-if="deck.hero"/>
                                        <span class="block flex-grow px-4 py-2">{{deck.name}}</span>
                                    </router-link>
                                </td>
                                <td class="border border-gray-300 p-2 px-4 hidden lg:table-cell">
                                    <deck-label :label="deck.label" v-if="deck.label" class="text-xs rounded-full p-1 px-2"/>
                                </td>
                                <td class="border border-gray-300 hidden lg:table-cell">
                                    <router-link :to="{name: 'decks.build', params: {deck: deck.parent.slug}}" class="block w-full p-2 px-4" v-if="deck.parent">{{deck.parent.name}}</router-link>
                                </td>
                                <td class="border border-gray-300 p-2 px-4 hidden sm:table-cell">{{deck.hero ? $settings.game.classes[deck.hero.class] : ''}}</td>
                                <td class="border border-gray-300 p-2 px-4 hidden md:table-cell">{{deck.totalCards}}</td>
                                <td class="border border-gray-300 p-2 px-4 hidden sm:table-cell">{{deck.updatedAt}}</td>
                                <td class="border border-gray-300 p-2 px-4">
                                    <div class="flex space-x-4 justify-center items-center">
                                        <router-link :to="{name: 'decks.test', params: {deck: deck.slug}}" @click="copyDeck(deck)" class="lg:hidden hover:text-gray-400">
                                            <icon :size="6">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                            </icon>
                                        </router-link>
                                        <router-link :to="{name: 'decks.test.prepare', params: {deck: deck.slug}}" @click="copyDeck(deck)" class="hidden lg:inline hover:text-gray-400">
                                            <icon :size="6">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                            </icon>
                                        </router-link>
                                        <button @click="copyDeck(deck)" class="hover:text-gray-400">
                                            <icon :size="6">
                                                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                            </icon>
                                        </button>
                                        <button @click="removeDeck(deck, key)" class="hover:text-gray-400">
                                            <icon :size="6">
                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                            </icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <paginator :results="response" @page-selected="setPage" class="py-4"></paginator>
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
    import DeckLabel from "../Decks/Viewing/DeckLabel";
    import DeckSearch from "../Decks/DeckSearch";
    import LazyLoader from "../Components/LazyLoader";
    import Models from "../Utilities/Models";
    import Paginator from "../Components/Paginator";
    import Sorter from "../Components/Sorter";
    import Submit from "../Components/Form/Submit";
    import Imagery from "../Utilities/Imagery";
    import axios from "axios";

    export default {
        mixins: [Imagery],
        components: {AddDeck, Collapser, Crumbs, DeckItem, DeckLabel, DeckSearch, Paginator, Sorter, Submit},

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
                params: {
                    class: '',
                    format: '',
                    page: 1
                }
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
                    this.newSearch();
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

            newSearch() {
                let params = this.params;

                axios.get('/decks/mine', {params}).then(response => {
                    this.refreshResults(response);
                });
            },

            refreshResults(response) {
                this.response = response.data;
                this.decks = Models.hydrateMany(response.data.data, Deck);
            },

            setPage(page) {
                this.params.page = page;
                this.newSearch();
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/mine').then(response => {
                callback(function() {
                    this.refreshResults(response);
                })
            });
        }),

        metaInfo() {
            return {
                title: 'Flesh & Blood Deck builder',
                description: 'Create and customise tournament-winning decks for Flesh & Blood TCG.'
            }
        }
    }
</script>
