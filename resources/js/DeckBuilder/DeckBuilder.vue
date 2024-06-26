<template>
    <div>
        <header-title>
            <template v-slot:title>
                <deck-name :name="deck.name" :hero="hero"/>
            </template>
        </header-title>

        <breadcrumbs :crumbs="crumbs"/>

        <div :class="fullScreenClasses">
            <div class="bg-white dark:bg-gray-800 border-b-4 border-gray-300 dark:border-gray-600">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center justify-between p-2 lg:p-4" :class="topAreaClasses">
                            <div class="flex flex-1 items-center space-x-2">
                                <version :deck="deck"/>
                                <mode-selector class="w-auto"/>
                                <grouping-selector v-show="['all', 'search'].indexOf(mode) !== -1" class="mr-2 hidden md:block" :grouping="grouping" @selected="updateGrouping" :options="{'default': 'Default', pitch: 'Pitch', cost: 'Cost', type: 'Type'}"/>
                                <play-deck :deck="deck"/>
                            </div>

                            <div class="lg:px-1 flex space-x-2">
                                <zoom-button :zoom="zoom" action="in" :fullScreen="fullScreen" class="hidden md:block"/>
                                <zoom-button :zoom="zoom" action="out" :fullScreen="fullScreen" class="hidden md:block"/>
                                <view-button/>
                                <fullscreen-button :full-screen="fullScreen" :toggle="toggleFullScreen"/>
                            </div>
                        </div>
                        <div v-if="mode === 'search'" class="flex items-center" :class="{...sidebarClasses, ...{'px-0 pr-4': this.fullScreen, 'border-l border-gray-300 dark:border-gray-600': !this.fullScreen}}">
                            <card-search class="flex bg-gray-800 rounded-lg w-full overflow-hidden" :class="{ 'focus:bg-white focus:border-gray-500': !fullScreen }"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-body h-full relative">
                <div class="flex h-full" :class="containers">
                    <div class="h-full overflow-y-auto" :class="mainAreaClasses">
                        <div v-if="!hero" class="h-full">
                            <hero-selector @hero-selected="setHero" :deck="deck"/>
                        </div>
                        <div v-else class="h-full">
                            <div v-if="mode === 'all'">
                                <div>
                                    <all-cards :collection="cards" class="hidden sm:block"/>
                                    <edit-deck :collection="cards" class="sm:hidden"/>
                                </div>
                            </div>
                            <edit-deck v-if="mode === 'search'" :collection="cards"/>
                            <deck-details v-if="mode === 'details'"/>
                            <main-deck v-if="mode === 'sideboard'" :collection="cards"/>
                            <metrics-performance v-show="mode === 'metrics'" :deck="deck" class="p-4"/>
                        </div>
                    </div>
                    <div v-if="mode === 'search' || mode === 'sideboard'" class="w-full md:w-1/3 overflow-y-auto bg-gray-200 dark:bg-gray-800 border-l border-gray-300 dark:border-gray-600" ref="searchResults">
                        <search-results v-if="mode === 'search'" @search-completed="scrollTop"/>
                        <sideboard v-if="mode === 'sideboard'" :collection="sideboard"/>
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
    import Cardable from '../CardDatabase/Cardable.js';
    import CardImage from '../CardDatabase/CardImage.vue';
    import CardSearch from "./CardSearch.vue";
    import DeckDetails from './DeckDetails.vue';
    import DeckName from './DeckName.vue';
    import DeckTotals from "../Decks/Metrics/DeckTotals.vue";
    import EditDeck from "./EditDeck.vue";
    import GroupingSelector from './GroupingSelector.vue';
    import FullscreenButton from '../Components/Fullscreen.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import HeroSelector from "../Components/HeroSelector.vue";
    import Icon from '../Components/Icon.vue';
    import LazyLoader from '../Components/LazyLoader.js';
    import MainDeck from './MainDeck.vue';
    import MetricsPerformance from "../Decks/Metrics/MetricsPerformance.vue";
    import ModeSelector from './ModeSelector.vue';
    import SearchResults from './SearchResults.vue';
    import Sideboard from './Sideboard.vue';
    import Viewable from './Viewable.js';
    import ViewButton from "./Buttons/View.vue";
    import ZoomButton from './Buttons/Zoom.vue';
    import ManagesDecks from "./ManagesDecks.js";
    import PlayDeck from "../Decks/PlayDeck.vue";
    import Version from "./Version.vue";

    export default {
        components: {
            AllCards,
            Breadcrumbs,
            CardImage,
            CardSearch,
            DeckDetails,
            DeckName,
            DeckTotals,
            EditDeck,
            FullscreenButton,
            GroupingSelector,
            HeaderTitle,
            HeroSelector,
            Icon,
            MainDeck,
            MetricsPerformance,
            ModeSelector,
            PlayDeck,
            SearchResults,
            Sideboard,
            Version,
            ViewButton,
            ZoomButton
        },

        mixins: [Cardable, ManagesDecks, ModeSelector, Viewable],

        data() {
            return {
                cardIndex: 0,
                swipeModes: ['all', 'search', 'details'],
                offset: 10,
                pad: 17
            }
        },

        computed: {
            ...mapGetters('deck', ['cards']),
            ...mapState('deck', ['deck', 'fullScreen', 'grouping', 'mode', 'sideboard', 'view', 'zoom']),
            ...mapState('cardSearch', ['params']),

            containers() {
                if (!this.fullScreen) {
                    return 'container sm:mx-auto';
                }
            },

            fullScreenClasses() {
                if (this.fullScreen) {
                    return 'fixed top-0 bottom-0 left-0 right-0 z-75';
                }
            },

            mainAreaClasses() {
                return this.mode === 'search' || this.mode === 'sideboard' ? 'w-0 md:w-2/3' : 'w-full';
            },

            sidebarClasses() {
                return {
                    'hidden md:block md:w-1/3 p-4 pr-0': true
                }
            },

            topAreaClasses() {
                return this.mode === 'search' ? 'w-full lg:w-2/3' : 'w-full';
            },

            crumbs() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Decks', link: '/decks/build/' },
                    { text: this.deck.name },
                ]
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),
            ...mapActions('deck', ['addCard', 'setDeck', 'setMode', 'setZoom', 'setGrouping', 'toggleFullScreen']),

            setHero(hero, type) {
                this.addCard({card: hero});
                this.setMode({mode: 'search'});
                this.deck.format = type.toLowerCase();

                this.addRemote(hero);
            },

            scrollTop() {
                this.$refs.searchResults.scrollTop = 0;
                window.scrollTo({top: 0});
            },

            updateGrouping(grouping) {
                this.setGrouping({grouping});
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    // This little piece of code ensures players going to deck build links go to the actual
                    // public deck link, rather than the build page, as lots of players tend to just copy and paste
                    // the build link.
                    if (!response.data.mine) {
                        this.$router.push({name: 'decks.view', params: {deck: response.data.slug}});
                        return;
                    }

                    this.setMode({ mode: 'all' });
                    this.setDeck({ deck: response.data });
                });
            });
        })
    }
</script>
