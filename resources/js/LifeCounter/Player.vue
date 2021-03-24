<template>
    <div class="flex-grow relative flex flex-col w-full " v-touch:moving="swipe">

        <div class="relative flex mx-auto z-100 mt-4">
            <hero-avatar :hero="player.hero" :name="player.hero.name" :width="80" class="absolute m-4 z-25" style="left: -40px; top: -15px"></hero-avatar>
            <button class="text-white px-8 text-4xl" @click="hurt()">-</button>
            <h2 class="font-serif uppercase text-12xl text-center" :class="lifeClass">{{ life }}</h2>
            <button class="text-white px-8 text-4xl" @click="heal()">+</button>
        </div>

        <div class="flex justify-center px-4 pr-2 py-1">
            <resource :resource="0" :player="player"></resource>
            <resource :resource="1" :player="player"></resource>
            <resource :resource="2" :player="player"></resource>
            <resource :resource="3" :player="player"></resource>
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

        components: {HeroAvatar, Resource},

        data() {
            return {
                life: Number(this.player.life),
                lastSwipe: null
            };
        },

        computed: {
            lifeClass() {
                if (this.life > this.player.maxLife) {
                    return 'text-green-400';
                }

                if (this.life === 0) {
                    return 'text-red-500';
                }

                return 'text-white';
            }
        },

        methods: {
            heal() {
                this.life += 1;
            },

            hurt() {
                if (this.life > 0) {
                    this.life -= 1;
                } else {
                    this.$emit('player-destroyed');
                }
            },

            swipe(event) {
                if (this.lastSwipe !== null) {
                    let current = event.changedTouches[0].clientY;
                    let previous = this.lastSwipe.clientY;

                    if (this.player.first) {
                        if (current < previous - 10) {
                            this.heal();
                            this.lastSwipe = event.changedTouches[0];
                        } else if (current > previous + 10) {
                            this.hurt();
                            this.lastSwipe = event.changedTouches[0];
                        }
                    } else {
                        if (current > previous + 10) {
                            this.heal();
                            this.lastSwipe = event.changedTouches[0];
                        } else if (current < previous - 10) {
                            this.hurt();
                            this.lastSwipe = event.changedTouches[0];
                        }
                    }
                } else {
                    this.lastSwipe = event.changedTouches[0];
                }
            }
        }
    };
</script>
