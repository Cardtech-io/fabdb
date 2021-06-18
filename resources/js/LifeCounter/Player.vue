<template>
    <div class="flex-grow flex flex-col w-full " v-touch:moving="swipe">
        <div class="flex mx-auto z-100 my-1" :style="{
            backgroundImage: 'url('+heroProfile(player.hero, 160, true)+')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 20px'
        }">
            <button class="text-white px-8 text-4xl" @click="hurt()">-</button>
            <h2 class="font-serif uppercase text-12xl text-center" :class="lifeClass" style="text-shadow: 2px 2px 3px #000000">{{ life }}</h2>
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
    import Imagery from "../Utilities/Imagery";
    import Resource from "../Decks/Resource";

    export default {
        props: {
            player: {
                required: true,
                type: Object
            },
            players: Number
        },

        mixins: [Imagery],
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
        },

        mounted() {
            this.$eventHub.$on('life-counter.reset', () => {
                this.life = Number(this.player.maxLife);
            });
        }
    };
</script>
