<template>
    <div class="inline-block flex flex-col w-full">
        <div class="mx-auto mt-4 w-full relative">
            <div class="absolute left-0 flex flex-col justify-center px-4 py-2 bg-semi-black rounded-lg">
                <resource :resource="3" :player="player"></resource>
                <resource :resource="2" :player="player"></resource>
                <resource :resource="1" :player="player"></resource>
                <resource :resource="0" :player="player"></resource>
            </div>
            <hero-avatar :hero="player.hero" :name="player.hero.name" :width="players === 1 ? 200 : 180" class="mx-auto"></hero-avatar>
        </div>
        <div class="flex mx-auto" v-touch:moving="swipe">
            <button class="text-white p-4 w-1/4 text-2xl" @click="hurt()">-</button>
            <h2 class="font-serif uppercase w-1/2 text-6xl text-center" :class="this.player.life === 0 ? 'text-red-400' : 'text-white'">{{ this.player.life }}</h2>
            <button class="text-white p-4 w-1/4 text-2xl" @click="heal()">+</button>
        </div>
    </div>
</template>

<script>
    import HeroAvatar from "../Components/HeroAvatar";
    import Resource from "../Decks/Resource";

    export default {
        props: {
            player: {
                required: true,
                type: Object
            },
            players: Number
        },

        data() {
            return {
                lastSwipe: null
            };
        },

        components: {HeroAvatar, Resource},

        methods: {
            heal() {
                this.player.life += 1;
            },

            hurt() {
                if (this.player.life > 0) {
                    this.player.life -= 1;
                }
            },

            swipe(event) {
                if (this.lastSwipe !== null) {
                    if (event.changedTouches[0].clientY < this.lastSwipe.clientY + 10) {
                        this.heal();
                        this.lastSwipe = event.changedTouches[0];
                    }
                    else if (event.changedTouches[0].clientY > this.lastSwipe.clientY - 10) {
                        this.hurt();
                        this.lastSwipe = event.changedTouches[0];
                    }
                } else {
                    this.lastSwipe = event.changedTouches[0];
                }
            }
        }
    };
</script>
