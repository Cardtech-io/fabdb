<template>
    <div>
        <header-title>
            <template v-slot:title>
                <deck-name :name="deck.name" :hero="hero"></deck-name>
            </template>
        </header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-white">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center p-4" :class="mainAreaClasses">
                            <div class="flex-auto hidden sm:block">
                                <h2 class="font-serif uppercase text-2xl" :class="{ 'text-red-500': totalCards > maxCards(deck) }">{{ totalCards }} / {{ maxCards(deck) }} <span class="text-base hidden md:inline">cards</span></h2>
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
                        <div v-if="mode == 'search'" class="flex items-center w-1/3" :class="{ 'px-0 bg-gray-200': fullScreen, 'border-l border-gray-300 px-4 pr-0': !fullScreen }">
                            <div class="flex bg-gray-200 rounded-lg w-full" :class="{ 'focus:bg-white focus:border-gray-500': !fullScreen }">
                                <input type="text" ref="nameSearch" v-model="keywords" placeholder="Search" class="flex-1 bg-transparent outline-none py-3 px-4" @keyup="delayedSearch" @keyup.enter="search(1)">
                                <button class="flex-initial mr-4 link-alternate" @click="$modal.show('search-help')">
                                    <icon :size="6">
                                        <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                    </icon>
                                </button>
                            </div>
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
        <modal name="search-help" :adaptive="true" :diablog="true" height="auto" classes="bg-gray-100 rounded-xl">
            <header class="bg-primary flex items-center text-white">
                <div class="m-4">
                    <icon :size="8">
                        <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"/>
                    </icon>
                </div>
                <h2 class="font-serif text-2xl uppercase">Search syntax help</h2>
            </header>
            <div class="m-4 text-base">
                <p class="italic bg-yellow-100 p-4 rounded-lg mb-4 -mx-4 text-center">Note: FaB DB's deck builder will automatically filter cards by your chosen hero's class, and generics.</p>
                <h2 class="font-serif text-xl uppercase">Card stats available to search:</h2>
                <ul class="list-disc ml-8 my-4">
                    <li>pitch</li>
                    <li>power</li>
                    <li>cost</li>
                    <li>defense</li>
                </ul>
                <p class="my-4">Modifiers available are: &lt;, &gt;, and =</p>
                <p class="my-4">These stats can be used either on their own, or chained together, for example:</p>
                <input type="text" class="input py-3 px-4 rounded-lg" value="pitch=2 power=5 cost>0">
                <p class="my-4">You can also search using plain keywords. Looking for Back Alley Breakline (red)?</p>
                <input type="text" class="input py-3 px-4 rounded-lg" value="back alley pitch=1">
                <p class="my-4">The more conditions and clauses you add, the more specific and targeted the search results become, for example - there are only 3 cards that match this query:</p>
                <input type="text" class="input py-3 px-4 rounded-lg" value="go again attack power>4 pitch<3">
            </div>
        </modal>
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
    import DeckName from './DeckName';
    import FilterSelector from './FilterSelector.vue';
    import GroupingSelector from './GroupingSelector.vue';
    import FullscreenButton from './Buttons/Fullscreen.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Icon from '../Components/Icon';
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
            DeckName,
            FilterSelector,
            GroupingSelector,
            FullscreenButton,
            Icon,
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
                    return 'fixed top-0 bottom-0 left-0 right-0 z-75';
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
