<template>
    <form @submit.prevent="addDeck()" class="block text-right">
        <input type="submit" class="w-1/3 p-2 appearance-none rounded-lg p-2 button-primary" value="Create deck">
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        methods: {
            addDeck: function() {
                axios.post('/decks/', {name: 'New deck'}).then(response => {
                    this.$router.push({name: 'decks.build', params: {deck: response.data.slug}});
                });
            }
        }
    };
</script>
