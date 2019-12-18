<template>
    <div>
        <div class="container sm:mx-auto flex">
            <div class="p-8 py-10 md:px-0">
                <h1 class="font-serif text-white text-4xl uppercase" v-if="deck">{{ hero.name }} ({{ deck.name }})</h1>
            </div>
        </div>

        <div class="sm:mx-auto bg-orange-900 text-white font-serif uppercase p-4" v-if="deck">
            <div class="container sm:mx-auto flex">
                <div class="flex-1">
                    <p>
                        <router-link to="/" class="text-white hover:text-orange-300">Home</router-link> <span class="text-orange-500">&gt;</span>
                        <span class="text-orange-300">View deck: {{ deck.name }}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-white">
            <div class="container sm:mx-auto py-4">
                <div class="flex">
                    <div class="flex-1 font-serif uppercase">
                        {{ totalCards }} Cards in deck &nbsp; 
                        (
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }}
                        )
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8" v-if="cards && cards.length">
                <div class="clearfix">
                    <div class="md:w-1/3 md:float-left">
                        <div class="mb-8">
                            <img :src="cardUrl(hero.identifier, 350)" :alt="hero.name" class="w-full max-w-md rounded-xl" style="max-width: 350px">
                        </div>
                    </div>

                    <div class="md:w-1/3 md:float-left pl-4">
                        <div v-if="other.length" class="mb-8">
                            <h3 class="p-2 font-serif uppercase text-2xl">Deck stats</h3>
                            <ol>
                                <li class="block p-1 pl-4 w-full">Average card cost: {{ averageCost }}</li>
                                <li class="block p-1 pl-4 w-full">Average pitch: {{ averagePitch }}</li>
                                <li class="block p-1 pl-4 w-full">Pitch 3: {{ pitchCount(3) }}</li>
                                <li class="block p-1 pl-4 w-full">Pitch 2: {{ pitchCount(2) }}</li>
                                <li class="block p-1 pl-4 w-full">Pitch 1: {{ pitchCount(1) }}</li>
                            </ol>
                        </div>

                        <div v-if="weapons" class="mb-8">
                            <h3 class="p-2 font-serif uppercase text-2xl">Weapons</h3>
                            <ol>
                                <li v-for="weapon in weapons" class="p-2 pl-4">
                                    <span>{{ weapon.name }}</span>
                                    <span class="text-gray-600 text-xs">{{ weapon.identifier }}</span>
                                </li>
                            </ol>
                        </div>

                        <div v-if="equipment.length" class="mb-8">
                            <h3 class="p-2 font-serif uppercase text-2xl">Equipment</h3>
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
                            <h3 class="p-2 font-serif uppercase text-2xl">Other</h3>
                            <ol>
                                <li v-for="card in other" class="p-2 pl-4">
                                    <span class="">({{ card.total }})</span>
                                    <span :class="{ 'text-red-600': card.total > 3 }">{{ card.name }}</span>
                                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span>
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
        },

        metaInfo() {
            return {
                title: this.deck ? 'View deck - ' + this.deck.name + ' (' + this.hero.name + ')' : 'Loading...'
            }
        }
    };
</script>