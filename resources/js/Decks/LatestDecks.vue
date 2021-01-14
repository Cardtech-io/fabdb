<template>
    <div>
        <div v-if="decks">
            <deck-item v-for="deck in decks.data" :deck="deck" :key="deck.slug" theme="dark"></deck-item>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import DeckItem from "./DeckItem";
    import LazyLoader from "../Components/LazyLoader";

    export default {
        components: {DeckItem},

        data() {
            return {
                decks: {}
            }
        },

        extends: LazyLoader((to, callback) => {
            axios.get('/decks/latest?user='+to.params.user).then(response => {
                callback(function() {
                    this.decks = response.data;
                });
            });
        })
    }
</script>

<style scoped>

</style>
