<template>
    <form @submit.prevent="addDeck()" class="block text-right">
        <input type="submit" class="py-2 px-4 appearance-none rounded-lg p-2 button-primary cursor-pointer" :value="label" :class="{'button-disabled': !enabled}" :disabled="!enabled">
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        props: {
            label: {
                type: String,
                required: true
            },

            name: {
                type: String,
                required: true
            },

            params: {
                type: Object,
                default: function() {
                    return {};
                }
            },

            enabled: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            addDeck() {
                axios.post('/decks/', {name: this.name, ...this.params}).then(response => {
                    this.$router.push({name: 'decks.build', params: {deck: response.data.slug}});
                });
            }
        }
    };
</script>
