<template>
    <div class="p-4 border-gray-800 border-t p-4">
        <form @submit.prevent="addDeck()" class="block flex">
            <input type="text" class="block bg-black w-2/3 p-2 rounded-l-lg" placeholder="Deck name" v-model="name" required>
            <input type="submit" class="block w-1/3 p-2 rounded-r-lg text-gray-300 bg-gray-800 hover:bg-gray-700 text-center" value="Add">
        </form>
    </div>
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
                    this.$emit('deck-added', response.data);
                });
            }
        }
    };
</script>