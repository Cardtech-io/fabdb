<template>
    <button class="px-4 py-1 uppercase first:rounded-l-full last:rounded-r-full" :class="{ 'bg-white': mode != deckMode }" @click="setMode({ mode })">{{ text }}</button>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        props: ['mode', 'text'],

        computed: {
            ...mapState('deck', {
                deckMode: state => state.mode
            })
        },

        methods: {
            ...mapActions('deck', ['setMode'])
        },

        watch: {
            deckMode: function(value) {
                console.log(value);
            }
        }
    };
</script>