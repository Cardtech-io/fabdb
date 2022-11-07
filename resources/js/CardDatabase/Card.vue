<template>
    <div class="relative w-full" ref="card">
        <header class="absolute w-full flex justify-center items-center -mt-3 z-25">
            <button @click="flip" class="rounded-full bg-black hover:bg-secondary p-1">
                <icon :size="6">
                    <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
                </icon>
            </button>
        </header>
        <div class="flip-card z-0" :style="styles" :class="{'viewing': flipped}">
            <div class="flip-card-inner">
                <img :src="image(printing.sku.sku)" class="w-full rounded-card flip-card-front" :width="requiredWidth" :height="requiredHeight">
                <img :src="image(printing.backfacePrinting.sku.sku)" class="w-full rounded-card flip-card-back" :width="requiredWidth" :height="requiredHeight" v-if="printing.backfacePrinting">
            </div>
        </div>
        <footer class="absolute w-full flex justify-center items-center -mt-3  z-25">
            <button @click="flip" class="rounded-full bg-black hover:bg-secondary p-1">
                <icon :size="6">
                    <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
                </icon>
            </button>
        </footer>
    </div>
</template>

<script>
import DetermineWidth from "../Components/DetermineWidth.js";
import Imagery from "../Utilities/Imagery";
import Icon from "../Components/Icon.vue";

export default {
    props: {
        printing: {
            required: true,
            type: Object
        },
        width: {
            type: Number,
            default: 450
        }
    },

    data: () => ({
        flipped: false
    }),

    mixins: [DetermineWidth, Icon, Imagery],

    methods: {
        flip() {
            this.flipped = !this.flipped;
        },

        image(sku) {
            return this.cardImageFromSku(sku, this.width);
        }
    },

    mounted() {
        this.requiredWidth = this.$refs.card.getBoundingClientRect().width;
        this.requiredHeight = this.calculateHeight(this.requiredWidth);
    },

    watch: {
        printing() {
            this.flipped = false;
        }
    }
}
</script>

<style scoped>
.flip-card {
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card.viewing .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
    @apply rounded-card;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

/* Style the back side */
.flip-card-back {
    transform: rotateY(180deg);
}

</style>
