<template>
    <div class="flex h-full">
        <div class="w-1/2 p-4">
            <h1 class="font-serif text-2xl" v-if="deck">{{ deck.name }}</h1>
            <p>No cards.</p>
        </div>

        <card-search view="all"></card-search>
    </div>
</template>

<script>
    import axios from 'axios';
    import CardSearch from '../CardDatabase/CardSearch.vue';

    export default {
        components: {CardSearch},

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