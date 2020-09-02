<template>
    <img :src="heroProfile(hero, this.width)" :alt="name" class="rounded-full">
</template>

<script>
    import Imagery from "../Utilities/Imagery";

    export default {
        mixins: [Imagery],
        props: {
            hero: {
                type: Object,
                required: true
            },

            name: {
                type: String
            },

            width: {
                default: 100
            }
        }
    };
</script>
