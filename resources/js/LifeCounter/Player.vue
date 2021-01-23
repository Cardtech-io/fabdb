<template>
    <div class="inline-block flex flex-col">
        <hero-avatar :hero="player.hero" :name="player.hero.name" :width="players === 1 ? 250 : 180" class="mx-auto mt-4"></hero-avatar>
        <div class="flex mx-auto">
            <button class="text-white p-4 w-1/4 text-2xl" @click="hurt()">-</button>
            <h2 class="font-serif uppercase w-1/2 text-6xl text-center" :class="this.player.life === 0 ? 'text-red-400' : 'text-white'">{{ this.player.life }}</h2>
            <button class="text-white p-4 w-1/4 text-2xl" @click="heal()">+</button>
        </div>
    </div>
</template>

<script>
    import HeroAvatar from "../Components/HeroAvatar";

    export default {
        props: {
            player: {
                required: true,
                type: Object
            },
            players: Number
        },

        components: {
            HeroAvatar
        },

        methods: {
            heal() {
                this.player.life += 1;
            },

            hurt() {
                if (this.player.life > 0) {
                    this.player.life -= 1;
                }
            }
        }
    };
</script>
