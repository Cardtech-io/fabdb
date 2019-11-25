<template>
    <div>
        <div class="border-gray-800 rounded-lg border p-4">
            <router-link to="/" class="link">Home</router-link>
            <span class="text-gray-600">&gt;</span> View deck<span class="text-gray-600">:</span> {{ deck.name }}
        </div>

        <div class="border border-gray-800 rounded-lg p-4 mt-8">
            <div v-if="cards && cards.length">
                <div class="border-b border-gray-800 mb-4 clearfix">
                    <h1 class="inline-block font-serif text-4xl">{{ hero.name }} ({{ deck.name }})</h1>
                    <div class="float-right py-2">{{ totalCards }} Cards in deck
                        (
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }}
                        )
                    </div>
                </div>
                <div class="clearfix">
                    <div class="md:w-1/3 md:float-left">
                        <div class="mb-8">
                            <img :src="cardUrl(hero.identifier, 350)" :alt="hero.name" class="w-full max-w-md" style="max-width: 350px">
                        </div>
                    </div>

                    <div class="md:w-1/3 md:float-left pl-4">
                        <div v-if="weapons" class="mb-8">
                            <h3 class="p-2 font-serif uppercase">Weapons</h3>
                            <ol>
                                <li v-for="weapon in weapons" class="p-2 pl-4">
                                    <span>{{ weapon.name }}</span>
                                    <span class="text-gray-600 text-xs">{{ weapon.identifier }}</span>
                                </li>
                            </ol>
                        </div>

                        <div v-if="equipment.length">
                            <h3 class="p-2 font-serif uppercase">Equipment</h3>
                            <ol>
                                <li v-for="card in equipment" class="p-2 pl-4">
                                    <span>{{ card.name }}</span>
                                    <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div class="md:w-1/3 md:float-left pl-4">
                        <div v-if="other.length">
                            <h3 class="p-2 font-serif uppercase">Other</h3>
                            <ol>
                                <li v-for="card in other" class="p-2 pl-4">
                                    <span :class="{ 'text-red-600': card.total > 3 }">{{ card.name }}</span>
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span>
                                    <span class="">({{ card.total }})</span>
                                    <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Cardable from '../CardDatabase/Cardable';
    import Viewable from './Viewable';

    export default {
        mixins: [ Cardable, Viewable ],

        data() {
            return {
                deck: null,
                cards: []
            }
        },

        mounted() {
            axios.get('/decks/' + this.$route.params.deck + '').then(response => {
                this.deck = response.data;
                this.cards = this.deck.cards;
            });
        }
    };
</script>