<template>
    <form @submit.prevent="addDeck()" class="block flex">
        <input type="text" class="block bg-black w-2/3 py-2 px-4 rounded-l-lg focus:outline-none" placeholder="Deck name" v-model="name" required>
        <input type="submit" class="block w-1/3 p-2 appearance-none block bg-red-700 text-white rounded-r-lg p-2 leading-tight focus:outline-none hover:bg-red-500 text-center" value="Add">
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                name: null
            }
        },

        methods: {
            addDeck: function() {
                axios.post('/decks/', {name: this.name}).then(response => {
                    this.name = null;
                    this.$emit('deck-added', response.data);
                });
            }
        }
    };
</script>
