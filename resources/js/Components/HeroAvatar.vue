<template>
    <div :style="{backgroundImage: 'url('+heroProfile(hero, width)+')'}" class="background-cover" :class="classes()"></div>
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
                return [
                    'w-'+this.width,
                    'h-'+this.width,
                    this.rounded ? 'rounded-full' : ''
                ];
            }
        }
    };
</script>
