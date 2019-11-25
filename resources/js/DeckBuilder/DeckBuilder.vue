<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <router-link to="/" class="link">Home</router-link>
            <span class="text-gray-600">&gt;</span> <router-link to="/deck-builder/" class="link">Deck builder</router-link>
            <span class="text-gray-600">&gt;</span> <span v-if="deck">{{ deck.name }}</span>
        </div>

        <div class="flex mt-8">
            <div class="w-1/2 h-full">
                <div class="mb-2">
                    <h2 class="font-serif uppercase">Cards in deck ({{ totalCards }})</h2>
                </div>

                <div class="border-gray-800 rounded-lg border">
                    <div v-if="cards && cards.length">
                        <div v-if="hero">
                            <a href="" @click.prevent="removeCard(hero)" class="block hover:bg-black p-2 w-full">
                                <h3 class="font-serif uppercase">{{ hero.name }}</h3>
                                <span class="text-gray-600 text-xs">{{ hero.identifier }}</span>
                            </a>
                        </div>

                        <div v-if="weapon">
                            <h3 class="p-2 font-serif uppercase">Weapon</h3>
                            <ol>
                                <li>
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

                        <div v-if="other.length">
                            <h3 class="p-2 font-serif uppercase">Other</h3>
                            <ol>
                                <li v-for="card in other">
                                    <a href="" @click.prevent="removeCard(card)" class="block hover:bg-black p-2 pl-4 w-full">
                                        <span :class="{ 'text-red-600': card.total > 3 }">{{ card.name }}</span>
                                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card)"></span>
                                        <span class="">({{ card.total }})</span>
                                        <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div v-else class="p-4">
                        No cards.
                    </div>
                </div>
            </div>

            <div class="w-1/2 ml-2 h-full">
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

    export default {
        components: { CardSelector },
        mixins: [ Cardable ],

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

            hero: function() {
                return this.cards.filter(card => {
                    return card.keywords.includes('hero');
                })[0];
            },

            weapon: function() {
                return this.cards.filter(card => {
                    return card.keywords.includes('weapon');
                })[0];
            },

            equipment: function() {
                return this.cards.filter(card => {
                    return card.keywords.includes('equipment');
                });
            },

            other: function() {
                return this.cards.filter(card => {
                    return !(card.keywords.includes('hero') || card.keywords.includes('equipment') || card.keywords.includes('weapon'));
                });
            },

            totalCards: function() {
                var count = 0;

                for (var i in this.other) {
                    count += this.other[i].total;
                }

                return count;
            }
        },

        data() {
            return {
                deck: null
            }
        },

        methods: {
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

                if (card.keywords.includes('weapon') && this.weapon) {
                    return false;
                }

                if (card.keywords.includes('equipment') && this.equipment.filter(equipment => { return equipment.keywords[2] === card.keywords[2]})[0]) {
                    return false;
                }

                if (card.total >= 3) {
                    return false;
                }

                return true;
            }
        },

        mounted() {
            axios.get('/decks/' + this.$route.params.deck + '').then(response => {
                this.deck = response.data;
            });
        }
    };
</script>