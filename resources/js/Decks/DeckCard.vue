<template>
    <router-link :to="/cards/ + card.identifier" class="block" v-if="useRouter">
        <colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource || !collapse"></colour>
        <span @mouseover="toggleCard(card)" @mouseleave="toggleCard(false)">{{ card.name }}</span>
        <span>({{ card.total }})</span>
    </router-link>
    <a :href="'/cards/' + card.identifier" target="_blank" class="block" v-else>
        <colour :resource="card.stats.resource" class="mr-2" v-if="card.stats.resource || !collapse"></colour>
        <span @mouseover="toggleCard(card)" @mouseleave="toggleCard(false)">{{ card.name }}</span>
        <span>({{ card.total }})</span>
    </a>
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
            },

            useRouter: {
                type: Boolean,
                default: true
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
