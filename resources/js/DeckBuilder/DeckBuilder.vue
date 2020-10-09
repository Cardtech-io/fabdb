<template>
    <div class="z-50">
        <header-title :title="hero ? deck.name + ' (' + hero.name + ')' : deck.name"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-white">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center p-4" :class="mainAreaClasses">
                            <div class="flex-auto hidden sm:block">
                                <h2 class="font-serif uppercase text-2xl" :class="{ 'text-red-500': totalCards > maxCards(deck) }">{{ totalCards }} <span class="text-base">cards</span></h2>
                            </div>

                            <grouping-selector v-if="mode !== 'details'" class="hidden lg:block"></grouping-selector>
                            <mode-selector class="w-full sm:w-auto"></mode-selector>

                            <div class="px-2 sm:px-1 flex">
                                <zoom-button :zoom="zoom" action="in" :fullScreen="fullScreen" class="hidden sm:block"></zoom-button>
                                <zoom-button :zoom="zoom" action="out" :fullScreen="fullScreen" class="hidden sm:block"></zoom-button>
                                <view-button></view-button>
                                <fullscreen-button></fullscreen-button>
                            </div>
                        </div>
                        <div v-if="mode == 'search'" class="w-1/3 flex items-center" :class="{ 'px-0 bg-gray-200': fullScreen, 'border-l border-gray-300 px-4 pr-0': !fullScreen }">
                            <input type="text" ref="nameSearch" v-model="keywords" placeholder="Search" class="input w-auto py-3 px-4" @keyup="delayedSearch" @keyup.enter="search(1)" :class="{ 'rounded-lg focus:bg-white focus:border-gray-500': !fullScreen }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 h-full relative">
                <div class="clearfix flex h-full" :class="containers">
                    <div class="h-full overflow-y-auto" :class="mainAreaClasses">
                        <all-cards v-if="mode == 'all' || mode == 'search'" :collection="cards"></all-cards>
                        <deck-details v-if="mode == 'details'"></deck-details>
                        <main-deck v-if="mode == 'sideboard'" :collection="cards"></main-deck>
                    </div>
                    <div v-if="mode == 'search' || mode == 'sideboard'" class="w-1/3 overflow-y-auto border-l border-gray-300">
                        <search-results v-if="mode == 'search'" :results="results" @card-type-selected="updateCardType"></search-results>
                        <sideboard v-if="mode == 'sideboard'" :collection="sideboard" class="p-4"></sideboard>
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
    import SearchResults from './SearchResults.vue';
    import Sideboard from './Sideboard.vue';
    import Viewable from './Viewable';
    import ViewButton from "./Buttons/View";
    import ZoomButton from './Buttons/Zoom';

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
            ViewButton,
            ZoomButton
        },

        mixins: [ Cardable, ModeSelector, Viewable ],

        data() {
            return {
                cardIndex: 0,
                keywords: '',
                cardType: '',
                offset: 10,
                pad: 17,
                results: [],
                searchTimeout: null
            }
        },

        computed: {
            ...mapGetters('deck', ['mainDeck']),
            ...mapState('deck', ['cards', 'deck', 'fullScreen', 'mode', 'sideboard', 'view', 'zoom']),
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

            mainAreaClasses() {
                return {
                    'w-2/3': this.mode === 'search' || this.mode === 'sideboard',
                    'w-full': this.mode !== 'search' && this.mode !== 'sideboard',
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

            delayedSearch() {
                this.clearSearch();

                this.searchTimeout = setTimeout(() => {
                    this.search(1);
                }, 800);
            },

            search: function(page) {
                this.clearSearch();

                this.setPage({ page });

                let params = {
                    deck: this.deck.slug,
                    cardType: this.cardType,
                    class: this.hero ? this.hero.keywords[0] : '',
                    keywords: this.keywords,
                    page: page
                };

                axios.get('/cards/build', { params: params }).then(response => {
                    this.results = response.data;
                }).catch(error => {});
            },

            updateCardType(value) {
                if (value === 'all') {
                    value = '';
                }

                this.cardType = value;
                this.search();
            },

            clearSearch() {
                if (this.searchTimeout) {
                    clearTimeout(this.searchTimeout);
                }
            }
        },

        mounted() {
            this.search(1);
        },

        created() {
            this.$eventHub.$on('card-selected', () => {
                this.name = '';
            });
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
