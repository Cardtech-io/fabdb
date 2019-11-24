<template>
    <div class="flex h-full">
        <div class="w-1/2 p-4">
            <h1 class="font-serif text-2xl" v-if="deck">{{ deck.name }}</h1>
            <p>No cards.</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CardSelector from './CardSelector.vue';

    export default {
        components: {CardSelector},

        data() {
            return {
                deck: null
            };
        },

        mounted() {
            axios.get('/decks/' + this.$route.params.deck).then(response => {
                this.deck = response.data;
            });
        }
    };
</script>