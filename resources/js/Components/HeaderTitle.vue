<template>
    <div></div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        props: ['title'],

        computed: {
            ...mapState('session', ['collapsed'])
        }
    };
</script>
