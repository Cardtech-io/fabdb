<template>
    <div>
        No cards
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                cards: []
            }
        },

        mounted() {
            axios.get('/decks/' + this.$route.params.deck + '').then(response => {
                this.cards = response.data.cards;
            });
        }
    };
</script>