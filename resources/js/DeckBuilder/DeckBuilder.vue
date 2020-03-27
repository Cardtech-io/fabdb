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
                    </div>
                    <div class="clearfix">
                        <div class="md:w-1/3 md:float-left" v-if="hero">
                            <div>
                                <card-image :card="hero" :clickHandler="removeCard"></card-image>
                            </div>
                            <div class="flex mt-2 mb-8">
                                <router-link :to="'/decks/' + deck.slug" class="w-1/2 appearance-none block w-full mt-2 bg-orange-700 text-center text-white rounded-l-lg py-2 px-2 leading-tight focus:outline-none hover:bg-orange-500 border-r border-gray-200">Share</router-link>
                                <button @click.prevent="copy" class="w-1/2 appearance-none block w-full mt-2 bg-orange-700 text-white py-2 px-2 leading-tight focus:outline-none hover:bg-orange-500 border-r border-gray-200">Text</button>
                                <button @click.prevent="exportingToTts = !exportingToTts" class="w-1/2 appearance-none block w-full mt-2 bg-orange-700 text-center text-white  py-2 px-2 leading-tight focus:outline-none hover:bg-orange-500 border-r border-gray-200">TTS</button>
                                <router-link :to="'/decks/export/' + deck.slug" class="w-1/2 appearance-none block w-full mt-2 bg-orange-700 text-center text-white rounded-r-lg py-2 px-2 leading-tight focus:outline-none hover:bg-orange-500">PDF</router-link>
                            </div>

                            <tts-exporter :deck="deck" v-if="exportingToTts"></tts-exporter>
                        </div>

                        <div class="md:w-1/3 md:float-left md:pl-8 md:pr-4">
                            <div v-if="other.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Card totals</h3>
                                <ol>
                                    <li class="block p-1 pl-4 w-full">Total cards: {{ totalCards }}</li>
                                    <li class="block p-1 pl-4 w-full">Attack actions: {{ totalAttackActions }}</li>
                                    <li class="block p-1 pl-4 w-full">Attack reactions: {{ totalAttackReactions }}</li>
                                    <li class="block p-1 pl-4 w-full">Defense reactions: {{ totalDefenseReactions }}</li>
                                </ol>
                            </div>

                            <div v-if="other.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Deck stats</h3>
                                <ol>
                                    <li class="block p-1 pl-4 w-full">Average card cost: {{ averageCost }}</li>
                                    <li class="block p-1 pl-4 w-full">Average pitch: {{ averagePitch }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 1: {{ pitchCount(1) }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 2: {{ pitchCount(2) }}</li>
                                    <li class="block p-1 pl-4 w-full">Pitch 3: {{ pitchCount(3) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 0: {{ costCount(0) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 1: {{ costCount(1) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 2: {{ costCount(2) }}</li>
                                    <li class="block p-1 pl-4 w-full">Cost 3+: {{ costCount(3) }}</li>
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

                        <div class="md:w-1/3 md:float-left md:pl-4">
                            <div v-if="other.length">
                                <h3 class="p-2 font-serif uppercase tex t-2xl">Other</h3>
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
    import { mapGetters } from 'vuex';

    import CardImage from '../CardDatabase/CardImage.vue';
    import CardSelector from './CardSelector.vue';
    import Cardable from '../CardDatabase/Cardable.js';
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import TtsExporter from './TtsExporter.vue';
    import Viewable from './Viewable';
    import { mapActions } from 'vuex';

    export default {
        components: {
            CardImage,
            CardSelector,
            Crumbs,
            HeaderTitle,
            TtsExporter
        },

        mixins: [ Cardable, Viewable ],

        computed: {
            ...mapGetters('session', ['user']),

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
                deck: null,
                exportingToTts: false
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            shareLine: function(line) {
                return line + '\n';
            },

            copy: function() {
                this.$copyText(this.shareText);
                this.addMessage({ status: 'success', message: 'Deck share text copied to clipboard.' });
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
