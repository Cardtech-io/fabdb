<template>
    <div class="container relative flex h-full">
        <div v-if="requirePlayers" class="p-4">
            <div class="flex">
                <h1 class="text-white font-serif uppercase text-2xl">Select Player {{ players.length + 1 }}</h1>
                <button class="button-primary ml-auto py-3 px-4 rounded" v-if="players.length === 1" @click="skip()">Skip</button>
            </div>
            <hero-selector @hero-selected="newPlayer" class="text-gray-500"></hero-selector>
        </div>
        <div v-else class="w-full flex flex-col h-full">
            <div class="h-full flex flex-col items-center">
                <player :player="secondPlayer" :players="players.length" v-if="players.length === 2" class="h-9/20 transform rotate-180"></player>
                <div class="h-1/10 flex items-center">
                    <button class="button-primary py-3 px-4 pb-2 font-serif uppercase rounded-lg mr-4" @click="reset()">Reset</button>
                    <button class="button-primary py-3 px-4 pb-2 font-serif uppercase rounded-lg" @click="chooseHeroes()">Heroes</button>
                </div>
                <player :player="firstPlayer" :players="players.length" :class="players.length === 1 ? 'h-9/10' : 'h-9/20'"></player>
            </div>
        </div>
        <div class="absolute bottom-0 right-0 p-4">
            <router-link :to="{ name: 'home' }" class="link">Back to FaB DB</router-link>
        </div>
    </div>
</template>

<script>
    import HeroSelector from "../Components/HeroSelector";
    import Player from "./Player";

    export default {
        components: {HeroSelector, Player},

        data() {
            return {
                players: [],
                requirePlayers: true
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

            newPlayer(hero) {
                this.players.push({
                    maxLife: hero.stats.life,
                    life: hero.stats.life,
                    resource: 0,
                    hero,
                });

                if (this.players.length === 2) {
                    this.requirePlayers = false;
                }
            },

            reset() {
                for (let i = 0; i < this.players.length; i++) {
                    this.players[i].life = this.players[i].maxLife;
                }
            },

            skip() {
                this.requirePlayers = false;
            }
        }
    }
</script>
