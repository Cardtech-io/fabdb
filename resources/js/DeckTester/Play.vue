<template>
    <div>
        <div class="flex justify-center items-stretch space-x-4">
            <div class="w-200">
                <div class="bg-gray-300 font-serif text-xl uppercase rounded-card h-full pt-32 text-center">Banished</div>
            </div>
            <div class="w-200">
                <div class="bg-gray-300 font-serif text-xl uppercase rounded-card h-full pt-32 text-center">Arsenal</div>
            </div>
            <div class="w-200">
                <card-image :card="hero" class="h-full"/>
            </div>
            <div class="w-200">
                <deck :deck="deck" :card-back="tester.deck.cardBackImage" class="cursor-pointer"/>
            </div>
            <div class="w-200">
                <div class="bg-gray-300 font-serif text-xl uppercase rounded-card h-full pt-32 text-center">Pitch</div>
            </div>
            <div class="w-200">
                <stack pile="discard" name="Discard"/>
            </div>
        </div>

        <hand :hand="hand"/>
    </div>
</template>

<script>
    import _ from "underscore";
    import Deck from "./Deck";
    import Hand from "./Hand";
    import Stack from "./Stack";
    import Tester from "./Tester";

    export default {
        props: {
            tester: {
                type: Tester,
                required: true
            },
        },

        components: {Deck, Hand, Stack},

        data() {
            return {
                deck: [],
                discard: [],
                hand: [],
                banished: [],
                hero: this.tester.hero
            }
        },

        methods: {
            reset() {
                this.deck = _.shuffle(this.tester.mainDeck.hydrate().cards)
                this.banished = [];
                this.discard = [];
            },
        },

        mounted() {
            this.reset();
        }
    }
</script>
