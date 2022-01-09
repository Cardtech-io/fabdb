<template>
    <div class="absolute top-0 right-0 bottom-0 left-0 z-10">
        <transition
            enter-active-class="transition-all transition-slowest ease-out-quad"
            leave-active-class="transition-all transition-slowest ease-out-quad"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <img :src="image" class="w-full h-full" v-show="visible">
        </transition>
        <button class="absolute -top-2 -right-2 rounded-full h-10 p-2" @click="visible = !visible" :class="visible ? 'button-primary' : 'button-secondary'">
            <img src="/img/altersleeveslogo.png" alt="Alter Sleeves logo" title="Alter Sleeve available!" class="w-full h-full">
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            image: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                visible: false
            };
        },

        mounted() {
            let img = new Image();
            img.src = this.image;
        }
    }
</script>
