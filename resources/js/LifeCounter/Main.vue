<template>
    <div class="no-dtz fixed top-0 right-0 bottom-0 left-0 flex flex-col overflow-y-scroll bg-semi-black">
        <div v-if="requirePlayers" class="p-4">
            <div class="flex">
                <h1 class="text-white font-serif uppercase text-2xl">Select Player {{ players.length + 1 }}</h1>
                <button class="button-primary ml-auto py-3 px-4 rounded" v-if="players.length === 1" @click="skip()">Skip</button>
            </div>
            <hero-selector @hero-selected="newPlayer" class="text-gray-500 shadow-lg"></hero-selector>
        </div>
        <div v-else class="w-full flex flex-col h-full">
            <div class="h-full flex flex-col items-center">
                <player :player="secondPlayer" :players="players.length" v-if="players.length === 2" class="transform rotate-180" @player-destroyed="logEvent"></player>
                <div class="flex items-center">
                    <button class="button-primary py-3 px-4 pb-2 font-serif uppercase rounded-l-lg" @click="reset()">Reset</button>
                    <button class="button-primary py-3 px-4 pb-2 font-serif uppercase" @click="chooseHeroes()">Heroes</button>
                    <router-link :to="{name: 'home'}" class="button-secondary py-3 px-4 pb-2 font-serif uppercase rounded-r-lg">FaB DB</router-link>
                </div>
                <player :player="firstPlayer" :players="players.length" @player-destroyed="logEvent"></player>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "../CardDatabase/Card";
    import HeroSelector from "../Components/HeroSelector";
    import moment from 'moment';
    import Player from "./Player";
    import Tracker from "../Components/Tracker";

    export default {
        components: {HeroSelector, Player},

        data() {
            return {
                players: [],
                requirePlayers: true,
                timer: null,
            }
        },

        computed: {
            firstPlayer() {
                return this.players[0];
            },

            secondPlayer() {
                return this.players[1];
            }
        },

        methods: {
            chooseHeroes() {
                this.players = [];
                this.requirePlayers = true;
            },

            logEvent() {
                if (this.timer && this.timer.diff(moment(), 'minutes') >= 5) {
                    Tracker.track('Game', 'Completed');
                    this.timer = null;
                }
            },

            newPlayer(hero) {
                let player = {
                    maxLife: hero.stats.life,
                    life: hero.stats.life,
                    resource: 0,
                    first: !this.players.length,
                    hero: new Card(hero),
                };

                this.players.push(player);

                if (this.players.length === 2) {
                    this.requirePlayers = false;
                }
            },

            reset() {
                this.$eventHub.$emit('life-counter.reset');
                this.timer = moment();
            },

            skip() {
                this.requirePlayers = false;
            }
        },

        watch: {
            requirePlayers(require) {
                if (!require) {
                    this.timer = moment();
                } else {
                    this.timer = null;
                }
            }
        }
    }
</script>

<style scoped>
    .no-dtz {
        touch-action: manipulation;
    }
</style>
