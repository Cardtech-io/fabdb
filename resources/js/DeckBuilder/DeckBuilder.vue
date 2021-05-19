<template>
    <div class="text-base" v-touch:swipe.left="swipeLeft" v-touch:swipe.right="swipeRight">
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
                        <div class="flex items-center p-4" :class="topAreaClasses">
                            <div class="flex-auto hidden sm:block">
                                <h2 class="font-serif uppercase text-xl" :class="{ 'text-red-500': totalCards > maxCards }">{{ totalCards }} / {{ maxCards }} <span class="text-base">cards</span></h2>
                            </div>

                            <grouping-selector v-if="mode !== 'details'" class="mr-2 hidden xl:block" :grouping="grouping" @selected="updateGrouping" :options="{name: 'Name', pitch: 'Pitch', cost: 'Cost'}"></grouping-selector>
                            <mode-selector class="w-full lg:w-auto"></mode-selector>

                            <div class="px-2 lg:px-1 flex">
                                <zoom-button :zoom="zoom" action="in" :fullScreen="fullScreen" class="hidden lg:block"></zoom-button>
                                <zoom-button :zoom="zoom" action="out" :fullScreen="fullScreen" class="hidden lg:block"></zoom-button>
                                <view-button></view-button>
                                <fullscreen-button :full-screen="fullScreen" :toggle="toggleFullScreen"></fullscreen-button>
                            </div>
                        </div>
                        <div v-if="mode == 'search'" class="flex items-center" :class="{...sidebarClasses, ...{'px-0 bg-gray-200': this.fullScreen, 'border-l border-gray-300': !this.fullScreen}}">
                            <card-search class="flex bg-gray-200 rounded-lg w-full" :class="{ 'focus:bg-white focus:border-gray-500': !fullScreen }"></card-search>
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
                    <div v-if="mode == 'search' || mode == 'sideboard'" class="w-full lg:w-1/3 overflow-y-auto border-l border-gray-300" ref="searchResults">
                        <search-results v-if="mode == 'search'" @search-completed="scrollTop"></search-results>
                        <sideboard v-if="mode == 'sideboard'" :collection="sideboard"></sideboard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    import AllCards from './AllCards.vue';
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import CardSearch from "./CardSearch";
    import DeckDetails from './DeckDetails.vue';
    import DeckName from './DeckName';
    import GroupingSelector from './GroupingSelector.vue';
    import FullscreenButton from '../Components/Fullscreen.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import Icon from '../Components/Icon';
    import LazyLoader from '../Components/LazyLoader';
    import MainDeck from './MainDeck.vue';
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
            CardSearch,
            DeckName,
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

        mixins: [Cardable, ModeSelector, Viewable],

        data() {
            return {
                cardIndex: 0,
                swipeModes: ['all', 'search', 'details'],
                offset: 10,
                pad: 17
            }
        },

        computed: {
            ...mapGetters('deck', ['mainDeck']),
            ...mapState('deck', ['cards', 'deck', 'fullScreen', 'grouping', 'mode', 'sideboard', 'view', 'zoom']),
            ...mapState('cardSearch', ['params']),

            containers() {
                if (!this.fullScreen) {
                    return 'container lg:mx-auto';
                }
            },

            fullScreenClasses() {
                if (this.fullScreen) {
                    return 'fixed top-0 bottom-0 left-0 right-0 z-75';
                }
            },

            mainAreaClasses() {
                return this.mode === 'search' || this.mode === 'sideboard' ? 'w-0 lg:w-2/3' : 'w-full';
            },

            maxCards() {
                return this.deck.format === 'blitz' ? 52 : 80;
            },

            sidebarClasses() {
                return {
                    'hidden lg:block lg:w-1/3 p-4': true
                }
            },

            topAreaClasses() {
                return this.mode === 'search' ? 'w-full lg:w-2/3' : 'w-full';
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
            ...mapActions('deck', ['setDeck', 'setMode', 'setZoom', 'setGrouping', 'toggleFullScreen']),

            scrollTop() {
                this.$refs.searchResults.scrollTop = 0;
                window.scrollTo({top: 0});
            },

            swipeLeft() {
                this.changeMode(this.currentSwipeMode() + 1);
            },

            swipeRight() {
                this.changeMode(this.currentSwipeMode() - 1);
            },

            changeMode(newMode) {
                if (newMode >= 0 && newMode <= 2) {
                    this.setMode({mode: this.swipeModes[newMode]});
                }
            },

            updateGrouping(grouping) {
                this.setGrouping({grouping});
            },

            currentSwipeMode() {
                return this.swipeModes.indexOf(this.mode);
            }
        },

        created() {
            this.$eventHub.$on('card-selected', () => {
                this.name = '';
            });

            this.$eventHub.$on('hero-selected', (hero, type) => {
                this.deck.format = type.toLowerCase();
            });
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
