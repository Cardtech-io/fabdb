<template>
    <div>
        <header-title title="Premium Deck Builder"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div :class="expandedClasses">
            <div class="bg-white border-b-2 border-gray-300">
                <div :class="containers">
                    <div class="flex">
                        <div class="flex items-center w-3/4 p-4" v-if="hero" :class="{ 'px-8': expanded }">
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
                        <div class="w-1/4 flex items-center px-4" :class="{ 'px-0 bg-gray-200': expanded, 'border-l border-gray-300': !expanded }">
                            <input type="text" v-model="keywords" class="input w-full" placeholder="Search for a card..." @keyup.enter="search" :class="{ 'appearance-none block w-full h-full bg-none text-gray-700 leading-tight outline-none px-8': expanded, 'focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg': !expanded }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 h-full relative">
                <div class="clearfix flex h-full" :class="containers">
                    <div class="w-3/4 h-full py-4 overflow-y-auto" :class="{ 'px-4': expanded }">
                        <div v-masonry class="pb-24" transition-duration="0.3s">
                            <div v-for="cards in displayCards" v-masonry-tile :class="cardClasses">
                                <div class="relative m-4">
                                    <img :src="cardUrl(cards[0].identifier, 450)" class="block w-full invisible" :style="margin(cards.length)">
                                    <div v-for="(card, i) in cards" :style="styles(i)" :class="rounded">
                                        <card-image :card="card" :rounded="rounded" :clickHandler="removeDeckCard"></card-image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/4 p-4 py-8 overflow-y-auto" :class="{ 'px-8': expanded, 'bg-gray-300': expanded, 'border-l border-gray-300': !expanded }">
                        <div v-for="card in results" class="rounded-lg mb-8 mx-auto" style="max-width: 300px">
                            <card-image :card="card" :clickHandler="addDeckCard"></card-image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'underscore';
    import { VueMasonryPlugin } from 'vue-masonry';
    import { mapActions } from 'vuex';

    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import ManagesDecks from './ManagesDecks';
    import Viewable from './Viewable';

    export default {
        components: { Breadcrumbs, CardImage, HeaderTitle },
        mixins: [ Cardable, ManagesDecks, Viewable ],

        data() {
            return {
                cards: [],
                expanded: false,
                cardIndex: 0,
                keywords: null,
                offset: 10,
                pad: 17,
                results: [],
                zoom: 1,
            }
        },

        computed: {
            cardClasses: function() {
                return [
                    'w-1/' + this.cardWidth,
                    this.rounded
                ];
            },

            displayCards: function() {
                let cards = [this.hero];

                let reducer = (carry, card) => {
                    for (let i = 0; i < card.total; i++) {
                        carry.push(card);
                    }

                    return carry;
                };

                cards = cards.concat(this.weapons.reduce(reducer, []));
                cards = cards.concat(this.equipment.reduce(reducer, []));
                cards = cards.concat(this.other.reduce(reducer, []));
                cards = Object.values(_.groupBy(cards, card => { return card.name; }));

                return cards;
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

            addDeckCard: function(card) {
                this.addCard(card).then(this.redraw);
            },

            removeDeckCard: function(card) {
                this.removeCard(card).then(this.redraw);
            },

            redraw: function() {
                setTimeout(() => {
                    this.$redrawVueMasonry();
                }, 10);
            },

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
                let floor = this.expanded ? 1 : 0;
                let ceiling = this.expanded ? 3 : 2;

                if ((this.zoom == floor && amount == -1) || (this.zoom == ceiling && amount == 1)) return;

                this.zoom = this.zoom + amount;
            },

            margin: function(total) {
                let items = total - 1;

                if (items > 0) {
                    return 'margin-bottom: ' + items * this.pad + '%';
                }
            },

            styles: function(i) {
                let styles = [];
                let zIndex = i * 10;

                styles.push('z-index: ' + zIndex);
                styles.push('position: absolute');
                styles.push('top: ' + (i * this.offset)  + '%');
                styles.push('left: 0');

                return styles.join('; ');
            }
        },

        watch: {
            expanded: function(value) {
                this.redraw();

                if (value && this.zoom == 0) {
                    this.zoom = 1;
                }

                if (!value && this.zoom == 3) {
                    this.zoom = 2;
                }
            },

            zoom: function() {
                this.redraw();
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.deck = response.data;
                    this.cards = _.sortBy(this.deck.cards, 'identifier');
                });
            });
        })
    }
</script>