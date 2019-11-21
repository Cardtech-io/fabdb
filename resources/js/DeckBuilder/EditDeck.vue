<template>
    <div class="flex h-full">
        <div class="w-1/2 p-4">
            <h1 class="font-serif text-2xl" v-if="deck">{{ deck.name }}</h1>
        </div>

        <div class="border-gray-800 border-l w-1/2 p-4">
            <input type="text" v-model="searchText" placeholder="Search" class="rounded p-2 bg-black focus:outline-none w-full">
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import CardSearch from '../CardDatabase/CardSearch';

    export default {
        mixins: [CardSearch],

        data() {
            return {
                deck: null,
                searchText: null
            };
        },

        mounted() {
            axios.get('/decks/' + this.$route.params.deck).then(response => {
                this.deck = response.data;
            });
        }
    };
</script>