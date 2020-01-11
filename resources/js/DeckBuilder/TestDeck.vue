<template>
    <div>
        <header-title title="Test Deck"></header-title>

            <div class="bg-orange-900 text-white font-serif uppercase">
                <div class="container sm:mx-auto p-4 flex">
                    <div class="flex-1">
                        <crumbs :crumbs="crumbs"></crumbs>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200">
                <div v-if="user.subscription">
                    <div class="container sm:mx-auto py-8 px-4 text-center">
                        <div class="mb-4">
                            <button @click="draw" class="inline-block appearance-none block w-full sm:w-auto bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500 disabled:opacity-50">Draw {{ hero.stats['hand-size'] }}</button>
                        </div>

                        <ol v-if="drawn.length" class="clearfix -mx-2 sm:-mx-4">
                            <card-item v-for="card in drawn" :card="card" path="/cards" :key="card.identifier"></card-item>
                        </ol>
                    </div>
                </div>

                <div v-else>
                    <div class="px-4 py-8">
                        <h2 class="font-serif uppercase text-xl mb-4">Membership required</h2>

                        <p>
                            Testing your deck's draw capabilities is a premium access feature. In order to use this feature,
                            you must be a patreon supporter. Check out <router-link to="/support" class="link">our support page</router-link> or
                            go directly to our <a href="https://www.patreon.com/fabdb" class="link">patreon page</a>. Memberships start as
                            low as $3/month!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    import CardItem from '../CardDatabase/CardItem.vue';
    import Crumbs from '../Components/Crumbs.vue';
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Viewable from './Viewable';

    export default {
        components: { CardItem, Crumbs, HeaderTitle },
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
            }
        },

        data() {
            return {
                deck: null,
                deckCards: [],
                drawn: [],
                drawnCards: [],
            }
        },

        methods: {
            draw: function() {
                this.drawn = []

                if (this.drawnCards.length >= this.deckCards.length) {
                    this.drawnCards = [];
                }

                for (var i = 0; i < this.hero.stats['hand-size']; i++) {
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
