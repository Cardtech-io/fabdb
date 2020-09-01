<template>
    <div>
        <header-title title="Deck Builder"></header-title>

        <div class="crumbs font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-auto">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
                <div class="text-right hidden sm:block flex-auto">
                    <a href="" class="hover:opacity-75 underline" @click.prevent="setTab('deck')" :class="isActive('deck')">Deck</a> <span class="opacity-25">|</span>
                    <a href="" class="hover:opacity-75 underline" @click.prevent="setTab('add-cards')" :class="isActive('add-cards')">Add Cards</a> <span class="opacity-25">|</span>
                    <a href="" class="hover:opacity-75 underline" @click.prevent="setTab('settings')" :class="isActive('settings')">Settings</a>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto sm:hidden bg-white flex border-b border-gray-200">
                <button class="w-1/3 text-center font-serif uppercase text-gray-800 hover:text-black p-4 border-r border-gray-200" @click.prevent="setTab('deck')" :class="activeTab == 'deck' ? 'bg-gray-200' : ''">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-10 w-10 focus:outline-none mx-auto">
                        <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"/>
                    </svg>
                    <div class="mt-1">Deck</div>
                </button>

                <button class="w-1/3 text-center font-serif uppercase text-gray-800 hover:text-black p-4 border-r border-gray-200" @click.prevent="setTab('add-cards')" :class="activeTab == 'add-cards' ? 'bg-gray-200' : ''">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-10 w-10 focus:outline-none mx-auto">
                        <path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z"/>
                    </svg>
                    <div class="mt-1">Add cards</div>
                </button>

                <button class="w-1/3 text-center font-serif uppercase text-gray-800 hover:text-black p-4 border-r border-gray-200" @click.prevent="setTab('settings')" :class="activeTab == 'settings' ? 'bg-gray-200' : ''">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-10 w-10 focus:outline-none mx-auto">
                        <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
                    </svg>
                    <div class="mt-1">Settings</div>
                </button>
            </div>

            <div class="container sm:mx-auto py-8 px-4" v-show="activeTab == 'deck'">
                <hover-card :card="hoverCard"></hover-card>
                <div v-if="cards && cards.length">
                    <div class="border-b border-gray-400 mb-8" v-if="hero">
                        <div class="flex-auto">
                            <h1 class="inline-block font-serif text-4xl uppercase" v-if="hero">{{ hero.name }}</h1>
                            <div class="text-gray-500 text-2xl font-serif uppercase -mt-2 mb-2">
                                {{ deck.name }}
                                <span class="inline-block bg-white text-lg rounded-full px-4 align-middle -mt-1 ml-2">
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="md:w-1/3 md:float-left" v-if="hero">
                            <div>
                                <card-image :card="hero" :clickHandler="removeCard"></card-image>
                            </div>
                            <div class="mt-2 mb-8">
                                <div class="flex">
                                    <button @click.prevent="copyShareURL" class="w-1/2 mt-2 button-primary rounded-l-lg p-2 mr-1px">Share</button>
                                    <button @click.prevent="showExportOptions = !showExportOptions" class="w-1/2 mt-2 button-primary rounded-r-lg p-2 mr-1px">Export</button>
                                </div>
                                <tts-exporter :deck="deck" v-if="showExportOptions"></tts-exporter>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left md:pl-8 md:pr-4">
                            <div v-if="other.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Card totals</h3>
                                <ol>
                                    <li class="block p-1 pl-4 w-full">Total cards: <span :class="{ 'text-red-500': totalCards > maxCards(deck) }">{{ totalCards }}</span></li>
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
                                    <li v-for="weapon in weapons" class="flex items-center odd:bg-gray-100 hover:bg-gray-300">
                                        <div class="flex flex-col h-full w-1/10">
                                            <button class="button-secondary flex-grow mb-1px" @click.prevent="addCard(weapon)">+</button>
                                            <button class="button-secondary flex-grow" @click.prevent="removeCard(weapon)">-</button>
                                        </div>
                                        <div class="w-9/10 block p-1 pl-4 cursor-default" @mouseover="hoverCard = weapon" @mouseleave="hoverCard = null">
                                            <span v-if="weapon.total > 1">({{ weapon.total }})</span>
                                            <span>{{ weapon.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ weapon.identifier }}</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div v-if="equipment.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase text-2xl">Equipment</h3>
                                <ol>
                                    <li v-for="card in equipment" class="flex items-center odd:bg-gray-100 hover:bg-gray-300 mb-1px">
                                        <button class="button-secondary leading-tight h-full p-2 w-1/10" @click.prevent="removeCard(card)">-</button>

                                        <div class="w-9/10 block p-1 pl-4 cursor-default" @mouseover="hoverCard = card" @mouseleave="hoverCard = null">
                                            <span>{{ card.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left md:pl-4">
                            <div v-if="other.length">
                                <h3 class="p-2 font-serif uppercase text-2xl">Other</h3>
                                <ol>
                                    <li v-for="card in other" class="block flex items-center odd:bg-gray-100 hover:bg-gray-300 mb-1px">
                                        <div class="flex flex-col h-full w-1/10">
                                            <button class="button-secondary flex-grow mb-1px" @click.prevent="addCard(card)">+</button>
                                            <button class="button-secondary flex-grow" @click.prevent="removeCard(card)">-</button>
                                        </div>

                                        <div class="w-9/10 block p-1 pl-4 cursor-default" @mouseover="hoverCard = card" @mouseleave="hoverCard = null">
                                            <span class="">({{ card.total }})</span>
                                            <span>{{ card.name }}</span>
                                            <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span>
                                            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                        </div>
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
                <card-selector @card-selected="addCard" :deck="deck"></card-selector>
            </div>

            <deck-settings :deck="deck" v-if="activeTab == 'settings'"></deck-settings>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapGetters } from 'vuex';

    import CardImage from '../CardDatabase/CardImage.vue';
    import CardSelector from './CardSelector.vue';
    import HoverCard from './HoverCard.vue';
    import Cardable from '../CardDatabase/Cardable.js';
    import Crumbs from '../Components/Crumbs.vue';
    import DeckSettings from './DeckSettings.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import ManagesDecks from './ManagesDecks';
    import LazyLoader from '../Components/LazyLoader';
    import TtsExporter from './TtsExporter.vue';
    import Viewable from './Viewable';
    import { mapActions } from 'vuex';

    export default {
        components: {
            CardImage,
            CardSelector,
            Crumbs,
            DeckSettings,
            HeaderTitle,
            HoverCard,
            TtsExporter
        },

        mixins: [ Cardable, ManagesDecks, Viewable ],

        computed: {
            ...mapGetters('session', ['user']),

            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Deck Builder', link: '/decks/build' },
                    { text: this.deck.name },
                ]
            }
         },

        data() {
            return {
                activeTab: 'deck',
                cards: [],
                deck: null,
                exportingToTts: false,
                hoverCard: null,
                showExportOptions: false
            }
        },

        methods: {
            ...mapActions('messages', ['addMessage']),

            addCard: function(card) {
                this.addRemote(card, () => {
                    this.addLocal(card);
                });
            },

            removeCard: function(card) {
                this.removeRemote(card);
                this.removeLocal(card);
            },

            isActive: function(tab) {
                return this.activeTab == tab ? 'opacity-50' : '';
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
                    this.cards = _.sortBy(this.deck.cards, 'name');
                });
            });
        })
    };
</script>
