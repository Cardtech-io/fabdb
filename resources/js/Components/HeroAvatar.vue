<template>
    <img :src="heroProfile(hero, width)" :alt="name" :class="classes()" :width="width" :height="width" v-if="hero">
</template>

<script>
    import Imagery from "../Utilities/Imagery.js";
    import Card from "../CardDatabase/Card.js";

    export default {
        mixins: [Imagery],
        props: {
            hero: {
                type: Card,
                required: true,
            },

            name: {
                type: String
            },

            rounded: {
                type: Boolean,
                default: true
            },

            width: {
                default: 100
            }
        },

        methods: {
            classes() {
                return this.rounded ? 'rounded-full' : '';
            }
        }
    };
</script>
