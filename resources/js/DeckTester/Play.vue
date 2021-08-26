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
                <stack pile="discard" name="Discarded"/>
            </div>
        </div>

        <hand :hand="hand"/>

        <button class="block w-auto relative button-primary rounded-full px-4 py-2 font-serif uppercase text-lg -top-24 mx-auto" @click="endTurn">
            End turn
        </button>

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
                discard: [],
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
                this.deck = _.shuffle(this.tester.mainDeck.hydrate().cards)
                this.banished = [];
                this.discard = [];
            }
        },

        mounted() {
            this.reset();
        }
    }
</script>
