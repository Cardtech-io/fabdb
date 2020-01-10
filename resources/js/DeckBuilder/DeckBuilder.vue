<template>
    <div>
        <header-title title="Deck Builder"></header-title>

        <div class="bg-orange-900 text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="flex-1 text-right">
                    (
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }}) &nbsp;

                    <a href="" class="text-white hover:text-orange-300" @click.prevent="setTab('deck')" :class="isActive('deck')">Deck</a> <span class="text-orange-500">|</span>
                    <a href="" class="text-white hover:text-orange-300" @click.prevent="setTab('add-cards')" :class="isActive('add-cards')">Add Cards</a>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8 px-4" v-show="activeTab == 'deck'">
                <div v-if="cards && cards.length">
                    <div class="border-b border-gray-400 mb-8" v-if="hero">
                        <h1 class="inline-block font-serif text-4xl" v-if="hero">{{ hero.name }} ({{ deck.name }})</h1>
                        <div class="float-right">
                            <router-link :to="'/decks/' + deck.slug" class="link" title="Shareable link">
                                <svg class="inline-block fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"/>
                                </svg>
                            </router-link>

                            &nbsp;

                            <a href="" @click.native="copy" class="link" title="Copy deck build to text for sharing on social media, messenger.etc.">
                                <svg class="inline-block fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M7.03 2.6a3 3 0 015.94 0L15 3v1h1a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 100-2 1 1 0 000 2z"/>
                                </svg>
                            </a>

                            &nbsp;

                            <router-link :to="'/decks/export/' + deck.slug" class="link">
                                <svg class="inline-block fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="md:w-1/3 md:float-left" v-if="hero">
                            <div class="mb-8">
                                <a href="" @click.prevent="removeCard(hero)"><img :src="cardUrl(hero.identifier, 350)" :alt="hero.name" class="w-full max-w-md rounded-xl" style="max-width: 350px"></a>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left pl-4 md:pr-4">
                            <div v-if="other.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Deck stats</h3>
                                <ol>
                                    <li class="block p-1 pl-4 w-full">Total cards: {{ totalCards }}</li>
                                    <li class="block p-1 pl-4 w-full">Average card cost: {{ averageCost }}</li>
                                    <li class="block p-1 pl-4 w-full">Average pitch: {{ averagePitch }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 3: {{ pitchCount(3) }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 2: {{ pitchCount(2) }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 1: {{ pitchCount(1) }}</li>
                                </ol>
                            </div>
                            <div v-if="weapons.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Weapons</h3>
                                <ol>
                                    <li v-for="weapon in weapons" class="odd:bg-gray-100">
                                        <a href="" @click.prevent="removeCard(weapon)" class="block hover:bg-gray-300 p-2 pl-4 w-full">
                                            <span v-if="weapon.total > 1">({{ weapon.total }})</span>
                                            <span>{{ weapon.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ weapon.identifier }}</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>

                            <div v-if="equipment.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Equipment</h3>
                                <ol>
                                    <li v-for="card in equipment" class="odd:bg-gray-100">
                                        <a href="" @click.prevent="removeCard(card)" class="block hover:bg-gray-300 p-2 pl-4 w-full">
                                            <span>{{ card.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left pl-4">
                            <div v-if="other.length">
                                <h3 class="p-2 font-serif uppercase text-2xl">Other</h3>
                                <ol>
                                    <li v-for="card in other" class="odd:bg-gray-100">
                                        <a href="" @click.prevent="removeCard(card)" class="block p-2 pl-4 w-full hover:bg-gray-300">
                                            <span class="">({{ card.total }})</span>
                                            <span :class="{ 'text-red-600': card.total > 3 }">{{ card.name }}</span>
                                            <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span>
                                            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="p-4">
                    No cards.
                </div>
            </div>

            <div v-show="activeTab == 'add-cards'">
                <card-selector @card-selected="addCard"></card-selector>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CardSelector from './CardSelector.vue';
    import Cardable from '../CardDatabase/Cardable.js';
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Viewable from './Viewable';
    import { mapActions } from 'vuex';

    export default {
        components: {
            CardSelector,
            Crumbs,
            HeaderTitle
        },

        mixins: [ Cardable, Viewable ],

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

            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Deck Builder', link: '/decks/build/' },
                    { text: this.deck.name },
                ]
            },


            shareText: function() {
                const weapons = this.weapons.map(weapon => weapon.name).join(', ');
                const equipment = this.equipment.map(item => item.name).join(', ');

                var text = this.shareLine('Deck build - via https://fabdb.net :') +
                        this.shareLine('') +
                        this.shareLine(this.deck.name) +
                        this.shareLine('') +
                        this.shareLine('Class: ' + this.ucfirst(this.hero.keywords[0])) +
                        this.shareLine('Hero: ' + this.hero.name) +
                        this.shareLine('Weapons: ' + weapons) +
                        this.shareLine('Equipment: ' + equipment) +
                        this.shareLine('');

                for (var i in this.other) {
                    var card = this.other[i];

                    text = text + this.shareLine('(' + card.total + ') ' + card.name + ' (' + this.colourToText(card.stats.resource) + ')');
                }

                text = text + this.shareLine('');
                text = text + this.shareLine('See the full deck at: https://fabdb.net/decks/' + this.deck.slug + '/');

                return text;
            }
         },

        data() {
            return {
                activeTab: 'deck',
                deck: null
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            shareLine: function(line) {
                return line + '\n';
            },

            copy: function() {
                this.$copyText(this.shareText);
            },

            addCard: function(card) {
                axios.post('/decks/' + this.$route.params.deck, {card: card.identifier}).then(response => {
                    const deckCard = this.findCard(card);

                    if (deckCard) {
                        deckCard.total += 1;
                    } else {
                        card.total = 1;
                        this.deck.cards.push(card);
                    }

                    this.addMessage({ status: 'success', message: 'Card added.' });
                }).catch(error => {
                    if (error.response.status == 422) {
                        this.addMessage({ status: 'error', message: error.response.data.errors.card[0] });
                    }
                });
            },

            removeCard: function(card) {
                const deckCard = this.findCard(card);

                if (deckCard.total > 1) {
                    deckCard.total -= 1;
                } else {
                    // Need to remove from array completely
                    var key = null;

                    for (var i in this.deck.cards) {
                        var match = this.deck.cards[i];

                        if (match.identifier == card.identifier) {
                            key = i;
                            break;
                        }
                    }

                    this.deck.cards.splice(i, 1);
                }

                axios.delete('/decks/' + this.$route.params.deck + '/' + card.identifier + '/');
            },

            findCard: function(card) {
                return this.deck.cards.filter(function(deckCard) {
                    return deckCard.identifier === card.identifier;
                })[0];
            },

            isActive: function(tab) {
                return this.activeTab == tab ? 'text-orange-300' : '';
            },

            setTab: function(tab) {
                this.activeTab = tab;
            }
        },

        metaInfo() {
            return {
                title: this.deck ? 'Deck builder - Edit deck (' + this.deck.name + ')' : 'Deck builder - Edit deck',
                meta: [
                    {
                        vmid: 'description',
                        name: 'description',
                        content: 'Fab DB is a suite of utilities for Flesh & Blood players, including a deck builder, collection manager and more.'
                    }
                ]
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    this.deck = response.data;
                });
            });
        })
    };
</script>
