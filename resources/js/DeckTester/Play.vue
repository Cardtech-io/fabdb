<template>
    <div class="relative">
        <div class="flex justify-center items-stretch space-x-4">
            <div class="w-200">
                <stack pile="banished" name="Banished"/>
            </div>
            <div class="w-200">
                <stack pile="arsenal" name="Arsenal"/>
            </div>
            <div class="pr-4">
                <div class="w-200">
                    <card-image :card="hero" class="h-full"/>
                </div>
            </div>
            <div class="pl-4">
                <div class="w-200">
                    <deck :deck="deck" :card-back="tester.deck.cardBackImage" class="cursor-pointer"/>
                </div>
            </div>
            <div class="w-200">
                <stack pile="pitch" name="Pitched"/>
            </div>
            <div class="w-200">
                <stack pile="graveyard" name="Graveyard"/>
            </div>
        </div>

        <hand :hand="hand"/>

        <div class="relative -top-24 flex justify-center space-x-4">
            <button class="transition duration-200 transform bg-secondary hover:bg-red-500 rounded-full h-12 w-12 flex justify-center items-center text-white shadow-lg hover:scale-110" @click="$parent.step = 'prepare'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
            </button>

            <button class="transition duration-200 transform bg-primary hover:bg-black rounded-full px-8 justify-center items-center text-white shadow-lg hover:scale-110" @click="endTurn">
                End turn
            </button>

            <button class="transition duration-200 transform bg-secondary hover:bg-red-500 rounded-full h-12 w-12 flex justify-center items-center text-white shadow-lg hover:scale-110" @click="reset">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </button>
        </div>

<!--        <history></history>-->
    </div>
</template>

<script>
    import _ from "underscore";
    import Deck from "./Deck";
    import Hand from "./Hand";
    import History from "./History";
    import Historian from "./Historian";
    import Stack from "./Stack";
    import Tester from "./Tester";

    export default {
        name: 'deck.play',

        props: {
            tester: {
                type: Tester,
                required: true
            },
        },

        components: {Deck, Hand, History, Stack},

        data() {
            return {
                arsenal: [],
                banished: [],
                deck: [],
                graveyard: [],
                hand: [],
                hero: this.tester.hero,
                pitch: [],
            }
        },

        methods: {
            endTurn() {
                while (this.pitch.length) {
                    let card = this.pitch.pop();
                    this.deck.unshift(card);
                    Historian.write('move-card', 'Moved "'+card.name+'" to bottom of deck.');
                }

                this.$eventHub.$emit('end-turn');
            },

            reset() {
                this.deck = _.shuffle(this.tester.mainDeck.hydrate().cards);
                this.banished = [];
                this.graveyard = [];
                this.pitch = [];
                this.hand = [];
                this.arsenal = [];
            }
        },

        mounted() {
            this.reset();
        }
    }
</script>
