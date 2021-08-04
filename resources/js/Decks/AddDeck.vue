<template>
    <form @submit.prevent="addDeck()" class="block text-right">
        <button type="submit" class="py-2 px-4 appearance-none rounded-lg p-2 button-secondary cursor-pointer" :class="{'button-disabled': !enabled}" :disabled="!enabled">
            <slot></slot>
        </button>
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        props: {
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
