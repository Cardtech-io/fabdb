<template>
    <div>
        <header-title :title="hero.name + ' (' + deck.name + ')'"></header-title>

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
            <div class="container sm:mx-auto">
                <div class="flex-1 font-serif uppercase p-4 md:px-0">
                    {{ totalCards }} Cards in deck &nbsp;
                    (
                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(3)"></span> {{ totalColoured.blue }} &nbsp;
                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(2)"></span> {{ totalColoured.yellow }} &nbsp;
                    <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(1)"></span> {{ totalColoured.red }}
                    )
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="container sm:mx-auto py-8" v-if="cards && cards.length">
                <div class="clearfix">
                    <div class="p-4 md:w-1/3 md:float-left">
                        <div class="mb-8">
                            <img :src="cardUrl(hero.identifier, 350)" :alt="hero.name" class="w-full max-w-md rounded-xl" style="max-width: 400px">
                        </div>
                    </div>

                    <div class="md:w-1/3 md:float-left pl-4">
                        <div v-if="other.length" class="mb-8">
                            <h3 class="p-2 font-serif uppercase text-2xl">Card totals</h3>
                            <ol>
                                <li class="block p-1 pl-4 w-full">Total cards: {{ totalCards }}</li>
                                <li class="block p-1 pl-4 w-full">Attack actions: {{ totalAttackActions }}</li>
                                <li class="block p-1 pl-4 w-full">Attack reactions: {{ totalAttackReactions }}</li>
                                <li class="block p-1 pl-4 w-full">Defense reactions: {{ totalDefenseReactions }}</li>
                            </ol>
                        </div>

                        <div v-if="other.length" class="mb-8">
                            <h3 class="p-2 font-serif uppercase text-2xl">Deck stats</h3>
                            <ol>
                                <li class="block p-1 pl-4 w-full">Average card cost: {{ averageCost }}</li>
                                <li class="block p-1 pl-4 w-full">Average pitch: {{ averagePitch }}</li>
                                <li class="block p-1 pl-4 w-full">Pitch 1: {{ pitchCount(1) }}</li>
                                <li class="block p-1 pl-4 w-full">Pitch 2: {{ pitchCount(2) }}</li>
                                <li class="block p-1 pl-4 w-full">Pitch 3: {{ pitchCount(3) }}</li>
                                <li class="block p-1 pl-4 w-full">Cost 0: {{ costCount(0) }}</li>
                                <li class="block p-1 pl-4 w-full">Cost 1: {{ costCount(1) }}</li>
                                <li class="block p-1 pl-4 w-full">Cost 2: {{ costCount(2) }}</li>
                                <li class="block p-1 pl-4 w-full">Cost 3+: {{ costCount(3) }}</li>
                            </ol>
                        </div>

                        <div v-if="weapons" class="mb-8">
                            <h3 class="p-2 font-serif uppercase text-2xl">Weapons</h3>
                            <ol>
                                <li v-for="weapon in weapons" class="p-2 pl-4">
                                    <router-link :to="/cards/ + weapon.identifier">
                                        <span>{{ weapon.name }}</span>
                                        <span class="text-gray-600 text-xs">{{ weapon.identifier }}</span>
                                    </router-link>
                                </li>
                            </ol>
                        </div>

                        <div v-if="equipment.length" class="mb-8">
                            <h3 class="p-2 font-serif uppercase text-2xl">Equipment</h3>
                            <ol>
                                <li v-for="card in equipment" class="p-2 pl-4">
                                    <router-link :to="/cards/ + card.identifier">
                                        <span>{{ card.name }}</span>
                                        <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                    </router-link>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div class="md:w-1/3 md:float-left pl-4">
                        <div v-if="other.length">
                            <h3 class="p-2 font-serif uppercase text-2xl">Other</h3>
                            <ol>
                                <li v-for="card in other" class="p-2 pl-4">
                                    <router-link :to="/cards/ + card.identifier">
                                        <span class="">({{ card.total }})</span>
                                        <span :class="{ 'text-red-600': card.total > 3 }">{{ card.name }}</span>
                                        <span class="inline-block rounded-lg h-2 w-2" :class="resourceColour(card.stats.resource)" v-if="card.stats.resource"></span>
                                        <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
                                    </router-link>
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
    import HeaderTitle from '../Components/HeaderTitle.vue';
    import LazyLoader from '../Components/LazyLoader';
    import Viewable from './Viewable';

    export default {
        mixins: [ Cardable, Viewable ],

        components: { HeaderTitle },

        data() {
            return {
                deck: null,
                cards: []
            }
        },

        metaInfo() {
            return {
                title: this.deck ? 'View deck - ' + this.deck.name + ' (' + this.hero.name + ')' : 'Loading...'
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/' + to.params.deck + '').then(response => {
                callback(function() {
                    this.deck = response.data;
                    this.cards = this.deck.cards;
                })
            });
        })
    };
</script>