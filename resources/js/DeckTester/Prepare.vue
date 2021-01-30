<template>
    <div class="flex">
        <div class="w-1/5 mr-4">
            <card-image :card="tester.hero"></card-image>
            <router-link :to="{name: 'decks.test.play', params: {deck: this.slug}}" class="flex w-full mt-4 button-primary py-3 px-4 rounded-lg">
                <span>Ready</span>
                <icon :size="5" class="ml-auto">
                    <path d="M10 7H2v6h8v5l8-8-8-8v5z"/>
                </icon>
            </router-link>
        </div>

        <div class="w-1/3 mx-4">
            <h2 class="uppercase font-serif text-xl mb-2">Deck <span class="text-gray-400 ml-1">(</span><span :class="{'text-red-500': tester.deck.total() < 60}">{{ tester.deck.total() }}</span><span class="text-gray-400">)</span></h2>
            <div class="rounded-xl border border-gray-400 p-4">
                <div v-for="card in deck" @click="move(card, tester.deck, tester.sideboard)" class="group flex items-center bg-gray-300 hover:bg-gray-100 overflow-auto rounded-lg text-base mb-1 cursor-pointer">
                    <div class="pl-4"><colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource"></colour></div>
                    <div class="p-2">{{ card.name }} ({{ card.total }})</div>
                    <div class="px-4 ml-auto">
                        <icon :size="5" class="group-hover:text-gray-500">
                            <path d="M10 7H2v6h8v5l8-8-8-8v5z"/>
                        </icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-1/3">
            <h2 class="uppercase font-serif text-xl mb-2">Sideboard <span class="text-gray-400 ml-1">(</span>{{ tester.sideboard.total() }}<span class="text-gray-400">)</span></h2>

            <div class="rounded-xl border border-gray-400 p-4">
                <div v-for="card in sideboard" @click="move(card, tester.sideboard, tester.deck)" class="group flex items-center bg-gray-300 hover:bg-gray-100 overflow-auto rounded-lg text-base mb-1 cursor-pointer">
                    <div class="px-4">
                        <icon :size="5" class="group-hover:text-gray-500">
                            <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/>
                        </icon>
                    </div>
                    <div class="p-2">{{ card.name }} ({{ card.total }})</div>
                    <colour :resource="card.stats.resource" class="ml-2" v-if="card.stats.resource"></colour>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardImage from "../CardDatabase/CardImage";
    import Cards from "../DeckBuilder/Cards";
    import Colour from "../DeckBuilder/Colour";
    import Icon from "../Components/Icon";
    import _ from "underscore";

    export default {
        props: ['slug', 'tester'],
        components: {CardImage, Colour, Icon},

        data() {
            return {
                deck: null,
                sideboard: null
            }
        },

        methods: {
            move(card, from, to) {
                to.add(card);
                from.remove(card);
                this.refresh();
            },

            refresh() {
                this.deck = new Cards(_.sortBy(this.tester.deck.all(), card => { return card.name }));
                this.sideboard = new Cards(_.sortBy(this.tester.sideboard.all(), card => { return card.name }));
            }
        },

        created() {
            this.refresh();
        }
    };
</script>
