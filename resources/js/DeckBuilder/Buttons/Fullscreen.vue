<template>
    <button class="block link-alternate" @click.prevent="toggleFullScreen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-6">
            <path d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z" v-if="!fullScreen"/>
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" v-else/>
        </svg>
    </button>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        computed: {
            ...mapState('deck', ['fullScreen'])
        },

        methods: {
            ...mapActions('deck', ['toggleFullScreen']),
        }
    };
</script>
