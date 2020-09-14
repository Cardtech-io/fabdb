<template>
    <router-link :to="/cards/ + card.identifier" class="block">
        <colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource || !collapse"></colour>
        <span @mouseover="toggleCard(card)" @mouseleave="toggleCard(false)">{{ card.name }}</span>
        <span class="text-gray-600 text-xs">{{ card.identifier }}</span>
        <span>({{ card.total }})</span>
    </router-link>
</template>

<script>
    import Colour from "../DeckBuilder/Colour";

    export default {
        props: {
            card: {
                type: Object,
                required: true
            },

            collapse: {
                type: Boolean,
                default: false,
                required: false
            }
        },

        components: {Colour},

        methods: {
            toggleCard(card) {
                this.$eventHub.$emit('hover-card', card);
            }
        }
    }
</script>
