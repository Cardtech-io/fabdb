<template>
    <div>
        <div class="flex justify-center">
            <div class="flex flex-wrap">
                <div class="w-200">
                    <card-image :card="hero"></card-image>
                </div>
                <div class="w-1/2">
                    // arsenal
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-1/2">
                    <deck :deck="deck" :card-back="tester.deck.cardBackImage" @click.native="draw" class="cursor-pointer"></deck>
                </div>
                <div class="w-1/2">
                    // discard
                </div>
                <div class="w-1/2">
                    // banished
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center mt-8 -space-x-8">
            <div v-for="(card, i) in hand" class="z-0 relative w-200 hover:z-25 cursor-pointer" :style="transform(i)">
                <card-image :card="card"></card-image>
            </div>
        </div>
    </div>
</template>

<script>
    import Deck from "./Deck";
    import Tester from "./Tester";
    import _ from "underscore";

    export default {
        props: {
            tester: {
                type: Tester,
                required: true
            },
        },

        components: {Deck},

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
            draw() {
                let card = this.deck.pop();

                this.hand.push(card);
            },

            reset() {
                this.deck = _.shuffle(this.tester.mainDeck.hydrate().cards)
                this.banished = [];
                this.discard = [];
            },

            transform(i) {
                let total = this.hand.length;

                if (total === 1) return;

                let division = 30 / total;
                let min = -15;
                let start = min + division / total;
                let degree = start + (i * division);

                let top = Math.abs(degree) * 2;

                return {
                    transform: 'rotate('+degree+'deg)',
                    top: top+'px',
                }
            }
        },

        mounted() {
            this.reset();
        }
    }
</script>
