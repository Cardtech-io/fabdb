<template>
    <div>
        <header-title :title="hero ? hero.name : 'Premium Deck Builder'"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-white border-b-2 border-gray-300">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center w-2/3 p-4" :class="{ 'px-8': fullScreen, 'w-full': mode != 'search' && mode != 'sideboard' }">
                            <div class="flex-auto">
                                <h1 class="inline-block font-serif text-4xl uppercase">{{ deck.name }}</h1>
                            </div>

                            <mode-selector></mode-selector>

                            <div class="px-2 flex">
                                <zoom-button :zoom="zoom" action="in" :fullScreen="fullScreen"></zoom-button>
                                <zoom-button :zoom="zoom" action="out" :fullScreen="fullScreen"></zoom-button>
                                <fullscreen-button></fullscreen-button>
                            </div>
                        </div>
                        <div v-if="mode == 'search'" class="w-1/3 flex items-center px-4" :class="{ 'px-0 bg-gray-200': fullScreen, 'border-l border-gray-300': !fullScreen }">
                            <input type="text" v-model="keywords" class="input w-full" placeholder="Search for a card..." @keyup.enter="search" :class="{ 'appearance-none block w-full h-full bg-none text-gray-700 leading-tight outline-none px-8': fullScreen, 'focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg': !fullScreen }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 h-full relative">
                <div class="clearfix flex h-full" :class="containers">
                    <div class="w-2/3 h-full py-4 overflow-y-auto" :class="{ 'px-4': fullScreen, 'w-full': mode != 'search' && mode != 'sideboard' }">
                        <all-cards v-if="mode == 'all' || mode == 'search'" :collection="cards"></all-cards>
                        <deck-details v-if="mode == 'details'"></deck-details>
                        <main-deck v-if="mode == 'sideboard'" :collection="cards"></main-deck>
                    </div>
                    <div v-if="mode == 'search' || mode == 'sideboard'" class="w-1/3 p-4 py-8 overflow-y-auto" :class="{ 'px-8': fullScreen, 'bg-gray-300': fullScreen, 'border-l border-gray-300': !fullScreen }">
                        <search-results v-if="mode == 'search'" :keywords="keywords" :results="results" @page-selected="updatePage"></search-results>
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
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import MainDeck from './MainDeck.vue';
    import ManagesDecks from './ManagesDecks';
    import DeckDetails from './DeckDetails.vue';
    import Redrawable from './Redrawable';
    import SearchResults from './SearchResults.vue';
    import Sideboard from './Sideboard.vue';
    import Viewable from './Viewable';
    import ZoomButton from './Buttons/Zoom.vue';
    import FullscreenButton from './Buttons/Fullscreen.vue';
    import ModeSelector from './ModeSelector.vue';

    export default {
        components: {
            AllCards,
            Breadcrumbs,
            CardImage,
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
                page: 1,
                results: []
            }
        },

        computed: {
            ...mapGetters('deck', ['mainDeck']),
            ...mapState('deck', ['cards', 'deck', 'fullScreen', 'mode', 'sideboard', 'zoom']),

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
            ...mapActions('deck', ['setDeck', 'setZoom']),

            search: function() {
                let params = {
                    keywords: this.keywords,
                    'use-case': 'build',
                    page: this.page,
                    perPage: 12,
                };

                axios.get('/cards/', { params: params }).then(response => {
                    this.results = response.data;
                }).catch(error => {});
            },

            updatePage: function(page) {
                this.page = page;
                this.search();
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.setDeck({ deck: response.data });
                });
            });
        })
    }
</script>
