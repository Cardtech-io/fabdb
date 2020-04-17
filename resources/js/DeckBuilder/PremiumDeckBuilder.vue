<template>
    <div>
        <header-title title="Premium Deck Builder"></header-title>

        <breadcrumbs :crumbs="crumbs"></breadcrumbs>

        <div class="bg-white border-b-2 border-gray-300">
            <div class="container sm:mx-auto">
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
                    </div>
                    <div class="w-1/4 border-l border-gray-300 flex items-center px-4">
                        <input type="text" v-model="keywords" class="input focus:bg-white focus:border-gray-500 py-3 px-4 rounded-lg w-full" placeholder="Search for a card..." @keyup.enter="search">
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-200 h-full">
            <div class="container sm:mx-auto clearfix py-4 flex h-full">
                <div class="w-3/4" v-masonry>
                    <div class="w-1/4 float-left relative" v-for="card in orderedCards" v-masonry-tile>
                        <div class="relative m-4">
                            <div v-for="i in card.total" class="rounded-lg" :style="styles(i, card.total)">
                                <card-image :card="card"></card-image>
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
</template>

<script>
    import Breadcrumbs from '../Components/Breadcrumbs.vue';
    import Cardable from '../CardDatabase/Cardable';
    import CardImage from '../CardDatabase/CardImage.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Viewable from './Viewable';

    export default {
        components: { Breadcrumbs, CardImage, HeaderTitle },
        mixins: [ Cardable, Viewable ],

        data() {
            return {
                keywords: null,
                results: []
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

            styles: function(i, total) {
                let pad = 12;
                let styles = [];

                i = i - 1;

                if (i == 0) {
                    if (total > 1) {
                        styles.push('margin-bottom: ' + total * pad + '%');
                    }
                }
                else {
                    styles.push('position: absolute');
                    styles.push('top: ' + i * pad + '%');
                    styles.push('box-shadow: 0 -12px 3px 0 rgba(0,0,0,0.3)');
                }

                return styles.join('; ');
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