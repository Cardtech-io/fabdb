<template>
    <div>
        <header-title title="Premium Deck Builder"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="expandedClasses">
            <div class="bg-white border-b-2 border-gray-300">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center w-3/4 p-4" v-if="hero">
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
                                <a href="" class="block link mr-4" @click.prevent="setZoom(-1)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6">
                                        <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z"/>
                                    </svg>
                                </a>

                                <a href="" class="block link mr-4" @click.prevent="setZoom(1)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6">
                                        <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM5 7h6v2H5V7z"/>
                                    </svg>
                                </a>

                                <a href="" class="block link" @click.prevent="expanded = !expanded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6">
                                        <path d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="w-1/4 border-l border-gray-300 flex items-center px-4">
                            <input type="text" v-model="keywords" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg w-full" placeholder="Search for a card..." @keyup.enter="search">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 h-full relative">
                <div class="clearfix py-4 flex h-full" :class="containers">
                    <div class="w-3/4 h-full overflow-y-auto">
                        <div v-masonry class="pb-24" transition-duration="0.3s">
                            <div v-for="card in orderedCards" v-masonry-tile :class="cardClasses">
                                <div class="relative m-4" :style="padding(card.total)">
                                    <div v-for="i in card.total" :class="rounded" :style="styles(i, card.total)">
                                        <card-image :card="card" :rounded="rounded"></card-image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/4 border-l border-gray-300 p-4">
                        <div v-for="card in results" class="rounded-lg mb-8">
                            <card-image :card="card"></card-image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Viewable from './Viewable';
    import { VueMasonryPlugin } from 'vue-masonry';

    export default {
        components: { Breadcrumbs, CardImage, HeaderTitle },
        mixins: [ Cardable, Viewable ],

        data() {
            return {
                expanded: false,
                keywords: null,
                offset: 10,
                pad: 12,
                results: [],
                zoom: 1,
            }
        },

        computed: {
            cards: function() {
                if (this.deck && this.deck.cards) {
                    function compare(a, b) {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    }

                    return this.deck.cards.sort(compare);
                }

                return [];
            },

            cardClasses: function() {
                return [
                    this.expanded ? 'w-1/' + this.cardWidth : 'w-1/4',
                    this.rounded
                ];
            },

            rounded: function() {
                let rounded = ['rounded-xl', 'rounded-lg', 'rounded', 'rounded'];

                return this.expanded ? rounded[this.zoom] : 'rounded';
            },

            cardWidth: function() {
                let widths = [3, 4, 5, 6];

                return widths[this.zoom];
            },

            containers: function() {
                if (!this.expanded) {
                    return 'container sm:mx-auto';
                }
            },

            expandedClasses: function() {
                if (this.expanded) {
                    return 'fixed top-0 bottom-0 left-0 right-0';
                }
            },

            orderedCards: function() {
                return [this.hero].concat(this.weapons).concat(this.other);
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
            search: function() {
                let params = {
                    keywords: this.keywords,
                    'use-case': 'build',
                };

                axios.get('/cards/', { params: params }).then(response => {
                    this.results = response.data.data;
                }).catch(error => {});
            },

            setZoom: function(amount) {
                if ((this.zoom == 0 && amount == -1) || (this.zoom == 2 && amount == 1)) return;

                this.zoom = this.zoom + amount;
            },

            padding: function(total) {
                let items = total - 1;

                if (items > 0) {
                    return 'padding-bottom: ' + items * this.pad + '%';
                }
            },

            redraw: function() {
                setTimeout(() => {
                    this.$redrawVueMasonry();
                }, 1);
            },

            styles: function(i, total) {
                let styles = [];

                i = i - 1;

                if (i > 0) {
                    styles.push('position: absolute');
                    styles.push('top: ' + i * this.offset + '%');
                    styles.push('box-shadow: 0 -12px 3px 0 rgba(0,0,0,0.3)');
                }

                return styles.join('; ');
            }
        },

        watch: {
            expanded: function() {
                this.redraw();
            },

            zoom: function() {
                this.redraw();
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.deck = response.data;
                });
            });
        })
    }
</script>