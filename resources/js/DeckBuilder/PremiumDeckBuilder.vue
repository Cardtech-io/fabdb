<template>
    <div>
        <header-title title="Premium Deck Builder"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="fullScreenClasses">
            <div class="bg-white border-b-2 border-gray-300">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center w-3/4 p-4" v-if="hero" :class="{ 'px-8': fullScreen }">
                            <div class="flex-auto">
                                <h1 class="inline-block font-serif text-4xl uppercase" v-if="hero">{{ hero.name }} <span class="text-gray-500 text-2xl">{{ deck.name }}</span></h1>
                            </div>
                            <div class="text-gray-800 text-2xl font-serif uppercase pr-2">
                                <span class="inline-block bg-gray-200 text-xl rounded-full px-4 py-2 align-middle">
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }}
                                </span>
                            </div>
                            <div class="px-2 flex">
                                <zoom-button :zoom="zoom" action="in" :fullScreen="fullScreen"></zoom-button>
                                <zoom-button :zoom="zoom" action="out" :fullScreen="fullScreen"></zoom-button>
                                <fullscreen-button></fullscreen-button>
                            </div>
                        </div>
                        <div class="w-1/4 flex items-center px-4" :class="{ 'px-0 bg-gray-200': fullScreen, 'border-l border-gray-300': !fullScreen }">
                            <input type="text" v-model="keywords" class="input w-full" placeholder="Search for a card..." @keyup.enter="search" :class="{ 'appearance-none block w-full h-full bg-none text-gray-700 leading-tight outline-none px-8': fullScreen, 'focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg': !fullScreen }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 h-full relative">
                <div class="clearfix flex h-full" :class="containers">
                    <div class="w-3/4 h-full py-4 overflow-y-auto" :class="{ 'px-4': fullScreen }">
                        <all-cards :collection="cards"></all-cards>
                    </div>
                    <div class="w-1/4 p-4 py-8 overflow-y-auto" :class="{ 'px-8': fullScreen, 'bg-gray-300': fullScreen, 'border-l border-gray-300': !fullScreen }">
                        <search-results :keywords="keywords" :results="results"></search-results>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'underscore';
    import { VueMasonryPlugin } from 'vue-masonry';
    import { mapActions, mapState } from 'vuex';

    import AllCards from './AllCards.vue';
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import ManagesDecks from './ManagesDecks';
    import SearchResults from './SearchResults.vue';
    import Viewable from './Viewable';
    import ZoomButton from './Buttons/Zoom.vue';
    import FullscreenButton from './Buttons/Fullscreen.vue';

    export default {
        components: { AllCards, Breadcrumbs, CardImage, FullscreenButton, HeaderTitle, SearchResults, ZoomButton },
        mixins: [ Cardable, ManagesDecks, Viewable ],

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
            ...mapState('deck', ['cards', 'deck', 'fullScreen', 'zoom']),

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
                    { text: 'Premium Deck Builder', link: '/decks/build/' },
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
                };

                axios.get('/cards/', { params: params }).then(response => {
                    this.results = response.data.data;
                }).catch(error => {});
            }
        },

        watch: {
            fullScreen: function(value) {
                if (value && this.zoom == 0) {
                    this.setZoom({ n: 1 });
                }

                if (!value && this.zoom == 3) {
                    this.setZoom({ n: 2 });
                }
            },
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