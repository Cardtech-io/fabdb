<template>
    <div>
        <header-title title="Test Deck"></header-title>

        <div class="bg-primary text-white font-serif uppercase">
            <div class="container sm:mx-auto p-4 flex">
                <div class="flex-1">
                    <crumbs :crumbs="crumbs"></crumbs>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8 px-4 text-center">
                <ol class="flex -mx-2 sm:-mx-4 mb-4 items-stretch">
                    <li class="p-2 sm:p-4 w-1/2 sm:w-1/3 lg:w-1/4">
                        <card-image :card="hero"></card-image>
                    </li>
                    <li class="hidden sm:block sm:w-1/3 lg:w-1/2 text-center p-4 pt-24">
                        <button @click="draw(1)" class="inline-block appearance-none block w-full rounded-lg py-3 px-4 button-primary">Draw 1</button>
                        <button @click="draw(hero.stats.intellect)" class="inline-block appearance-none block w-full rounded-lg py-3 px-4 button-primary mt-2">Draw {{ hero.stats['hand-size'] }}</button>
                    </li>
                    <li class="p-2 sm:p-4 w-1/2 sm:w-1/3 lg:w-1/4">
                        <div v-if="arsenal">
                            <card-image :card="arsenal" :clickHandler="removeFromArsenal"></card-image>
                        </div>
                        <div class="bg-gray-300 font-serif text-xl uppercase rounded-lg sm:rounded-xl h-full align-middle pt-24" v-else>Arsenal</div>
                    </li>
                </ol>

                <div class="mb-4 flex sm:hidden">
                    <button @click="draw(1)" class="appearance-none inline-block w-1/2 rounded-l-lg py-3 px-4 button-primary disabled:opacity-50">Draw 1</button>
                    <button @click="draw(4)" class="appearance-none inline-block w-1/2 rounded-r-lg py-3 px-4 button-primary disabled:opacity-50">Draw {{ hero.stats['hand-size'] }}</button>
                </div>

                <ol v-if="drawn.length" class="flow-root -mx-2 sm:-mx-4">
                    <li class="float-left p-2 sm:p-4 w-1/2 sm:w-1/4" v-for="card in drawn" :class="pcWidth">
                        <drawn-card :card="card" @arsenaled="addToArsenal(card)"></drawn-card>
                    </li>
                </ol>
                <div v-else class="text-center">
                    There are no cards in hand.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    import CardImage from '../CardDatabase/CardImage.vue';
    import Crumbs from '../Components/Crumbs.vue';
    import DrawnCard from './DrawnCard.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader.js';
    import Viewable from './Viewable.js';

    export default {
        components: { CardImage, Crumbs, DrawnCard, HeaderTitle },
        mixins: [ Viewable ],

        computed: {
            ...mapGetters('session', ['user']),

            cards: function() {
                return this.deck.cards;
            },

            crumbs: function() {
                return [
                    { text: 'Home', link: '/' },
                    { text: 'Deck Builder', link: '/decks/build/' },
                    { text: 'Test ' + this.deck.name },
                ]
            },

            empty: function() {
                return !this.deckCards;
            },

            pcWidth: function() {
                let width = 4;

                if (this.drawn.length > 4) {
                    width = this.drawn.length;
                }

                if (this.drawn.length > 6) {
                    width = 4;
                }

                return 'sm:w-1/' + width;
            }
        },

        data() {
            return {
                arsenal: null,
                deck: null,
                deckCards: [],
                drawn: [],
                drawnCards: [],
            }
        },

        methods: {
            addToArsenal: function(card) {
                this.arsenal = card;
            },

            draw: function(number) {
                if (number > 1) {
                    // Remove from the drawn array those that were played, pitched, or arsenaled.
                    this.drawn = this.drawn.filter(card => {
                        return !(card.played || card.pitched || card.arsenaled);
                    });
                }

                if (this.drawnCards.length >= this.deckCards.length) {
                    // this is our draw reset cycle
                    this.drawnCards = [];
                    return;
                }

                // If we're just drawing 1, always draw 1, else draw up to hand size
                let start = number == 1 ? 0 : this.drawn.length;

                for (var i = start; i < number; i++) {
                    if (this.drawnCards.length >= this.deckCards.length) continue;

                    const randomCard = this.randomCard();
                    this.drawnCards.push(randomCard.identifier);

                    this.drawn.push(randomCard);
                }
            },

            randomCard: function() {
                const available = this.deckCards.filter(card => {
                    return !this.drawnCards.includes(card.identifier);
                });

                return available[Math.floor(Math.random() * available.length)];
            },

            removeFromArsenal: function() {
                this.arsenal = null;
            },

            shuffle: function(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }
        },

        metaInfo() {
            return {
                title: this.deck ? 'Deck builder - Test deck (' + this.deck.name + ')' : 'Deck builder - Test deck',
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck).then(response => {
                callback(function() {
                    response.data.cards.forEach(card => {
                        // Setting some default values for testing
                        card.arsenaled = false;
                        card.pitched = false;
                        card.played = false;
                    });

                    this.deck = response.data;
                    this.deckCards = this.deck.cards.filter(card => {
                        return !card.keywords.includes('equipment')
                            && !card.keywords.includes('weapon')
                            && !card.keywords.includes('hero');
                    });
                });
            });
        })
    };
</script>
