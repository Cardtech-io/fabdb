<template>
    <button class="w-full text-left px-4 py-2 hover:bg-gray-300 uppercase" @click="setMode({ mode })">{{ text }}</button>
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
        }
    };
</script>
