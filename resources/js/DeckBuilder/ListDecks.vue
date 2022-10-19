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
        <div class="container sm:px-2 sm:mx-auto">
            <form class="main-body p-4 block sm:flex w-full" @submit.prevent="newSearch">
                <div class="w-full mb-1 sm:mb-0 sm:w-1/3 sm:pr-1">
                    <select v-model="params.class" class="input focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg">
                        <option value="">Select class</option>
                        <option :value="k" v-for="(c, k) in $settings.game.classes">{{ c }}</option>
                    </select>
                </div>

                <div class="w-full mb-1 sm:mb-0 sm:w-1/3 sm:pr-1">
                    <select v-model="params.format" class="input focus:bg-white focus:border-gray-500 py-2 px-4 rounded-lg">
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

            <div class="main-body">
                <div v-if="user">
                    <table class="w-full table-auto border-collapse bg-white dark:bg-gray-800">
                        <thead>
                            <tr class="text-sm">
                                <th class="p-1 font-serif uppercase text-left font-normal">Deck</th>
                                <th class="p-1 px-2 font-serif uppercase text-left font-normal">Version</th>
                                <th class="p-1 px-2 font-serif uppercase text-left font-normal hidden lg:table-cell">Label</th>
                                <th class="p-1 px-2 font-serif uppercase text-left font-normal hidden lg:table-cell">Parent</th>
                                <th class="p-1 px-2 font-serif uppercase text-left font-normal hidden sm:table-cell">Class</th>
                                <th class="p-1 px-2 font-serif uppercase text-left font-normal hidden md:table-cell">Cards</th>
                                <th class="p-1 px-2 font-serif uppercase text-left font-normal hidden sm:table-cell">Updated</th>
                                <th class="p-1 px-2 font-serif uppercase text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-gray-100 dark:odd:bg-gray-700 group hover:bg-gray-600 dark:hover:bg-gray-500 hover:text-white dark:hover:text-gray-200" v-for="(deck, key) in decks">
                                <td class="text-sm lg:text-base">
                                    <router-link :to="{name: 'decks.build', params: {deck: deck.slug}}" class="block flex items-center h-full">
                                        <img :src="squareThumbUrl(deck.hero.image, 50)" v-if="deck.hero"/>
                                        <div class="px-2 flex-grow">
                                            <span class="block flex-grow">{{deck.name}}</span>
                                        </div>
                                    </router-link>
                                </td>
                                <td class="p-1 px-2">V.{{deck.version}}</td>
                                <td class="p-1 px-2 hidden lg:table-cell">
                                    <deck-label :label="deck.label" v-if="deck.label" class="text-xs rounded-full p-1 px-2"/>
                                </td>
                                <td class="hidden lg:table-cell">
                                    <router-link :to="{name: 'decks.build', params: {deck: deck.parent.slug}}" class="block w-full p-1 px-4" v-if="deck.parent">{{deck.parent.name}}</router-link>
                                </td>
                                <td class="p-1 px-2 hidden sm:table-cell">{{deck.hero ? $settings.game.classes[deck.hero.class] : ''}}</td>
                                <td class="p-1 px-2 hidden md:table-cell">{{deck.totalCards}}</td>
                                <td class="p-1 px-2 hidden sm:table-cell">{{deck.updatedAt}}</td>
                                <td class="p-1 px-2">
                                    <div class="flex space-x-1 items-center">
                                        <play-deck :deck="deck"/>

                                        <button @click="copyDeck(deck)" class="hover:text-gray-400 dark:hover:text-white">
                                            <icon :size="6">
                                                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                            </icon>
                                        </button>
                                        <button @click="removeDeck(deck, key)" class="hover:text-gray-400 dark:hover:text-white">
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

    import axios from "axios";
    import AddDeck from '../Decks/AddDeck.vue';
    import Collapser from "../Components/Collapser.vue";
    import Crumbs from "../Components/Crumbs.vue";
    import Deck from "../Decks/Deck.js";
    import DeckItem from "../Decks/DeckItem.vue";
    import DeckLabel from "../Decks/Viewing/DeckLabel.vue";
    import DeckSearch from "../Decks/DeckSearch.vue";
    import LazyLoader from "../Components/LazyLoader.js";
    import Models from "../Utilities/Models.js";
    import Paginator from "../Components/Paginator.vue";
    import Sorter from "../Components/Sorter.vue";
    import Submit from "../Components/Form/Submit.vue";
    import Imagery from "../Utilities/Imagery.js";
    import PlayDeck from "../Decks/PlayDeck.vue";

    export default {
        mixins: [Imagery],
        components: {AddDeck, Collapser, Crumbs, DeckItem, DeckLabel, DeckSearch, Paginator, PlayDeck, Sorter, Submit},

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
