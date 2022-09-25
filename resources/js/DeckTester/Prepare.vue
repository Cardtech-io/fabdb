<template>
    <div class="flex">
        <div class="w-1/3 mx-4">
            <h2 class="uppercase font-serif text-xl mb-2">Deck <span class="text-gray-400 ml-1">(</span><span :class="{'text-red-500': deckTotal < 60}">{{ deckTotal }}</span><span class="text-gray-400">)</span></h2>
            <deck-preparer :stack="mainDeck" :handler="move(tester.mainDeck, tester.sideboard)">
                <template #right>
                    <path d="M10 7H2v6h8v5l8-8-8-8v5z"/>
                </template>
            </deck-preparer>
        </div>

        <div class="w-1/3 mx-4">
            <h2 class="uppercase font-serif text-xl mb-2">Sideboard <span class="text-gray-400 ml-1">(</span>{{ tester.sideboard.total() }}<span class="text-gray-400">)</span></h2>

            <deck-preparer :stack="sideboard" :handler="move(tester.sideboard, tester.mainDeck)">
                <template #left>
                    <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/>
                </template>
            </deck-preparer>
        </div>

        <div class="w-1/5 mx-4">
            <card-image :card="tester.hero"></card-image>
            <button class="flex w-full mt-4 py-3 px-4 rounded-full button-primary items-center" @click="$parent.step = 'play'">
                <span>Ready (Test!)</span>
                <icon :size="5" class="ml-auto">
                    <path d="M10 7H2v6h8v5l8-8-8-8v5z"/>
                </icon>
            </button>
        </div>
    </div>
</template>

<script>
    import _ from "underscore";
    import Cards from "../DeckBuilder/Cards.js";
    import Colour from "../DeckBuilder/Colour.vue";
    import DeckPreparer from "./DeckPreparer.vue";
    import Tester from "./Tester.js";

    export default {
        name: 'deck.prepare',

        props: {
            tester: {
                type: Tester,
                required: true
            },
        },

        components: {Colour, DeckPreparer},

        data() {
            return {
                mainDeck: null,
                deckTotal: 0,
                sideboard: null
            }
        },

        methods: {
            move(from, to) {
                return (card) => {
                    this.tester.move(card, from, to);
                    this.refresh();
                };
            },

            refresh() {
                this.mainDeck = new Cards(_.sortBy(this.tester.mainDeck.all(), card => { return card.name }));
                this.sideboard = new Cards(_.sortBy(this.tester.sideboard.all(), card => { return card.name }));
                this.deckTotal = this.mainDeck.total();
            }
        },

        created() {
            this.refresh();
        }
    };
</script>
