<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <router-link to="/" class="link">Home</router-link>
            <span class="text-gray-600">&gt;</span> <router-link to="/deck-builder/" class="link">Deck builder</router-link>
            <span class="text-gray-600">&gt;</span> <span v-if="deck">{{ deck.name }}</span>
        </div>

        <ul class="mt-4 clearfix">
            <li class="float-left"><a href="" class="inline-block p-4 rounded-t-lg hover:bg-gray-800 mr-2" @click.prevent="setTab('deck')" :class="{ 'bg-gray-800': activeTab == 'deck', 'bg-gray-900': activeTab != 'deck' }">Deck</a></li>
            <li class="float-left"><a href="" class="inline-block p-4 rounded-t-lg hover:bg-gray-800 mr-2" @click.prevent="setTab('card-selector')" :class="{ 'bg-gray-800': activeTab == 'card-selector', 'bg-gray-900': activeTab != 'card-selector' }">Add cards</a></li>
            <li class="float-left p-4">{{ totalCards }} Cards in deck
                (
                <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }} &nbsp;
                )
            </li>
        </ul>

        <div class="border border-gray-800 rounded-lg rounded-tl-none p-4">
            <div v-show="activeTab == 'deck'">
                <div v-if="cards && cards.length">
                    <div class="border-b border-gray-800 mb-4" v-if="hero">
                        <h1 class="inline-block font-serif text-4xl" v-if="hero">{{ hero.name }} ({{ deck.name }})</h1>
                        <div class="float-right py-2">
                            <a href="" @click.prevent="copy" class="link" title="Copy deck to text for sharing on social media">
                                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.08 12.16A2.99 2.99 0 010 10a3 3 0 015.08-2.16l8.94-4.47a3 3 0 11.9 1.79L5.98 9.63a3.03 3.03 0 010 .74l8.94 4.47A2.99 2.99 0 0120 17a3 3 0 11-5.98-.37l-8.94-4.47z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="md:w-1/3 md:float-left" v-if="hero">
                            <div class="mb-8">
                                <a href="" @click.prevent="removeCard(hero)"><img :src="cardUrl(hero.identifier, 350)" :alt="hero.name" class="w-full max-w-md" style="max-width: 350px"></a>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left pl-4">
                            <div v-if="weapons.length" class="mb-8">
                                <h3 class="p-2 font-serif uppercase">Weapons</h3>
                                <ol>
                                    <li v-for="weapon in weapons">
                                        <a href="" @click.prevent="removeCard(weapon)" class="block hover:bg-black p-2 pl-4 w-full">
                                            <span>{{ weapon.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ weapon.identifier }}</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>

                            <div v-if="equipment.length">
                                <h3 class="p-2 font-serif uppercase">Equipment</h3>
                                <ol>
                                    <li v-for="card in equipment">
                                        <a href="" @click.prevent="removeCard(card)" class="block hover:bg-black p-2 pl-4 w-full">
                                            <span>{{ card.name }}</span>
                                            <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:float-left pl-4">
                            <div v-if="other.length">
                                <h3 class="p-2 font-serif uppercase">Other</h3>
                                <ol>
                                    <li v-for="card in other">
                                        <a href="" @click.prevent="removeCard(card)" class="block hover:bg-black p-2 pl-4 w-full">
                                            <span :class="{ 'text-red-600': card.total > 3 }">{{ card.name }}</span>
                                            <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span>
                                            <span class="">({{ card.total }})</span>
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

            <div v-show="activeTab == 'card-selector'">
                <div class="mb-2">
                    <h2 class="font-serif uppercase">Card selector</h2>
                </div>

                <div class="border-gray-800 rounded-lg border">
                    <card-selector @card-selected="addCard"></card-selector>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CardSelector from './CardSelector.vue';
    import Cardable from '../CardDatabase/Cardable.js';
    import Viewable from './Viewable';

    export default {
        components: { CardSelector },
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
            shareLine: function(line) {
                return line + '\r\n';
            },

            copy: function() {
                this.$copyText(this.shareText);
            },

            addCard: function(card) {
                const deckCard = this.findCard(card);

                // validate
                const valid = this.validate(deckCard);

                if (! valid) return;

                if (deckCard) {
                    deckCard.total += 1;
                } else {
                    card.total = 1;
                    this.deck.cards.push(card);
                }

                axios.post('/decks/' + this.$route.params.deck, {card: card.identifier});
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

            // Validates whether the card in question can be added
            validate: function(card) {
                // Doesn't exist in array, continue.
                if (! card) return true;

                if (card.keywords.includes('hero') && this.hero) {
                    return false;
                }

                if (card.keywords.includes('weapon') && this.weapons.length == 2) {
                    return false;
                }

                if (card.keywords.includes('equipment') && this.equipment.filter(equipment => { return equipment.keywords[2] === card.keywords[2]})[0]) {
                    return false;
                }

                if (card.total >= 3) {
                    return false;
                }

                return true;
            },

            setTab: function(tab) {
                this.activeTab = tab;
            }
        },

        mounted() {
            axios.get('/decks/' + this.$route.params.deck + '').then(response => {
                this.deck = response.data;
            });
        }
    };
</script>
