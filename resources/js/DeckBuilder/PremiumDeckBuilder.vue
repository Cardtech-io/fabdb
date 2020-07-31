<template>
    <div>
        <header-title :title="hero ? deck.name + ' (' + hero.name + ')' : deck.name"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-white">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center w-2/3 p-4 sm:px-2" :class="{ 'sm:px-8': fullScreen, 'w-full': mode != 'search' }">
                            <div class="flex-auto hidden sm:block">
                                <h2 class="font-serif uppercase text-2xl" :class="{ 'text-red-500': totalCards > maxCards(deck) }">{{ totalCards }} <span class="text-base">cards</span></h2>
                            </div>

                            <filter-selector v-if="mode != 'details'" class="hidden sm:block"></filter-selector>
                            <grouping-selector v-if="mode != 'details'" class="hidden sm:block"></grouping-selector>
                            <mode-selector class="w-full sm:w-auto"></mode-selector>

                            <div class="px-2 sm:px-1 flex">
                                <zoom-button :zoom="zoom" action="in" :fullScreen="fullScreen" class="hidden sm:block"></zoom-button>
                                <zoom-button :zoom="zoom" action="out" :fullScreen="fullScreen" class="hidden sm:block"></zoom-button>
                                <fullscreen-button></fullscreen-button>
                            </div>
                        </div>
                        <div v-if="mode == 'search'" class="w-1/3 flex items-center px-4" :class="{ 'px-0 bg-gray-200': fullScreen, 'border-l border-gray-300': !fullScreen }">
                            <input type="text" v-model="keywords" class="input w-full" placeholder="Search for a card..." @keyup.enter="search(1)" :class="{ 'appearance-none block w-full h-full bg-none text-gray-700 leading-tight outline-none sm:px-8': fullScreen, 'focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg': !fullScreen }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 h-full relative">
                <div class="clearfix flex h-full" :class="containers">
                    <div class="w-2/3 h-full sm:py-4 overflow-y-auto" :class="{ 'sm:px-4': fullScreen, 'w-full': mode != 'search' && mode != 'sideboard' }">
                        <all-cards v-if="mode == 'all' || mode == 'search'" :collection="cards"></all-cards>
                        <deck-details v-if="mode == 'details'"></deck-details>
                        <main-deck v-if="mode == 'sideboard'" :collection="cards"></main-deck>
                    </div>
                    <div v-if="mode == 'search' || mode == 'sideboard'" class="w-1/3 p-4 sm:py-8 overflow-y-auto" :class="{ 'sm:px-8': fullScreen, 'bg-gray-300': fullScreen, 'border-l border-gray-300': !fullScreen }">
                        <search-results v-if="mode == 'search'" :results="results"></search-results>
                        <sideboard v-if="mode == 'sideboard'" :collection="sideboard"></sideboard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'underscore';
    import { VueMasonryPlugin } from 'vue-masonry';
    import { mapActions, mapGetters, mapState } from 'vuex';

    import AllCards from './AllCards.vue';
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import DeckDetails from './DeckDetails.vue';
    import FilterSelector from './FilterSelector.vue';
    import GroupingSelector from './GroupingSelector.vue';
    import FullscreenButton from './Buttons/Fullscreen.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import MainDeck from './MainDeck.vue';
    import ManagesDecks from './ManagesDecks';
    import ModeSelector from './ModeSelector.vue';
    import Redrawable from './Redrawable';
    import SearchResults from './SearchResults.vue';
    import Sideboard from './Sideboard.vue';
    import Viewable from './Viewable';
    import ZoomButton from './Buttons/Zoom.vue';

    export default {
        components: {
            AllCards,
            Breadcrumbs,
            CardImage,
            FilterSelector,
            GroupingSelector,
            FullscreenButton,
            MainDeck,
            DeckDetails,
            ModeSelector,
            HeaderTitle,
            SearchResults,
            Sideboard,
            ZoomButton
        },

        mixins: [ Cardable, ManagesDecks, ModeSelector, Redrawable, Viewable ],

        data() {
            return {
                cardIndex: 0,
                keywords: null,
                offset: 10,
                pad: 17,
                results: []
            }
        },

        computed: {
            ...mapGetters('deck', ['mainDeck']),
            ...mapState('deck', ['cards', 'deck', 'fullScreen', 'mode', 'sideboard', 'zoom']),
            ...mapState('cardSearch', ['params']),

            containers: function() {
                if (!this.fullScreen) {
                    return 'container sm:mx-auto';
                }
            },

            fullScreenClasses: function() {
                if (this.fullScreen) {
                    return 'fixed top-0 bottom-0 left-0 right-0';
                }
            },

            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Decks', link: '/decks/build/' },
                    { text: this.deck.name },
                ]
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
            ...mapActions('deck', ['setDeck', 'setMode', 'setZoom']),
            ...mapActions('cardSearch', ['setPage']),

            search: function(page) {
                this.setPage({ page });

                let params = {
                    keywords: this.keywords,
                    'use-case': 'build',
                    page: page,
                    perPage: 12,
                };

                axios.get('/cards/', { params: params }).then(response => {
                    this.results = response.data;
                }).catch(error => {});
            }
        },

        watch: {
            'params.page': function(value) {
                this.search(value);
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.setMode({ mode: 'all' });
                    this.setDeck({ deck: response.data });
                });
            });
        })
    }
</script>
